// Ganpati Bappa & Tirupati Balaji Audio System (Supports Real MP3s & Sound Synthesis)
class DivineSoundSystem {
  constructor() {
    this.audioCtx = null;
    this.bgmPlaying = false;
    this.bgAudio = new Audio('assets/audio/ganpati_music.mp3');
    this.bgAudio.loop = true;
    this.bgAudio.volume = 0.25;
    this.bellAudio = new Audio('assets/audio/bell.mp3');
    this.bellAudio.volume = 0.45;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Play Bell (Tries real bell audio first, falls back to metallic chime)
  playTempleBell() {
    if (this.bellAudio && this.bellAudio.src) {
      this.bellAudio.currentTime = 0;
      const promise = this.bellAudio.play();
      if (promise !== undefined) {
        promise.catch(() => {
          this.playSynthesizedBell();
        });
        return;
      }
    }
    this.playSynthesizedBell();
  }

  playSynthesizedBell() {
    this.initContext();
    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.7, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.2);
    masterGain.connect(ctx.destination);

    // Initial clapper transient
    const bufferSize = ctx.sampleRate * 0.04;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(3200, now);
    noiseFilter.Q.setValueAtTime(4.0, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.5, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);
    whiteNoise.start(now);

    const modes = [
      { freq: 784.0, gain: 0.45, decay: 4.0 },
      { freq: 1568.0, gain: 0.60, decay: 3.4 },
      { freq: 1880.0, gain: 0.35, decay: 2.6 },
      { freq: 2360.0, gain: 0.30, decay: 2.2 },
      { freq: 3136.0, gain: 0.25, decay: 1.8 }
    ];

    modes.forEach((mode, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(mode.freq + (Math.random() - 0.5) * 2, now);
      oscGain.gain.setValueAtTime(mode.gain, now);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + mode.decay);
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start(now);
      osc.stop(now + mode.decay + 0.1);
    });
  }

  // Play Divine Shankh (Conch) Resonance
  playShankh() {
    this.initContext();
    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const baseFreq = 220;
    const shankhOsc = ctx.createOscillator();
    const gain = ctx.createGain();

    shankhOsc.type = 'sawtooth';
    shankhOsc.frequency.setValueAtTime(baseFreq, now);
    shankhOsc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.8);
    shankhOsc.frequency.exponentialRampToValueAtTime(baseFreq * 1.33, now + 2.5);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 0.8);
    filter.frequency.exponentialRampToValueAtTime(500, now + 2.8);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.45, now + 0.6);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

    shankhOsc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    shankhOsc.start(now);
    shankhOsc.stop(now + 3.3);
  }

  // Toggle BGM (Plays real MP3 audio file)
  toggleBGM(onStateChange) {
    if (this.bgmPlaying) {
      this.stopBGM();
      if (onStateChange) onStateChange(false);
    } else {
      this.startBGM(onStateChange);
    }
  }

  startBGM(onStateChange) {
    this.bgmPlaying = true;
    this.bgAudio.volume = 0.25;
    const playPromise = this.bgAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        if (onStateChange) onStateChange(true);
      }).catch(error => {
        console.log("Audio playback notice: Provide an audio file in assets/audio/ganpati_music.mp3", error);
        // Fallback gentle tanpura drone
        this.playGentleDrone();
        if (onStateChange) onStateChange(true);
      });
    }
  }

  stopBGM() {
    this.bgmPlaying = false;
    if (this.bgAudio) {
      this.bgAudio.pause();
    }
    this.stopGentleDrone();
  }

  playGentleDrone() {
    this.initContext();
    const ctx = this.audioCtx;
    this.droneGain = ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.001, ctx.currentTime);
    this.droneGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.5);
    this.droneGain.connect(ctx.destination);

    this.droneOscs = [130.81, 196.00, 261.63].map(freq => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.connect(this.droneGain);
      osc.start();
      return osc;
    });
  }

  stopGentleDrone() {
    if (this.droneGain && this.audioCtx) {
      this.droneGain.gain.linearRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.5);
      setTimeout(() => {
        if (this.droneOscs) {
          this.droneOscs.forEach(o => { try { o.stop(); } catch(e){} });
          this.droneOscs = [];
        }
      }, 600);
    }
  }
}

window.divineSound = new DivineSoundSystem();
