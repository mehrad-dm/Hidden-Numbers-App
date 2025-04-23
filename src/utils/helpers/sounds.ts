import winSound from "@/assets/sounds/win.wav";
import failSound from "@/assets/sounds/fail.wav";
import clickSound from "@/assets/sounds/click.wav";

const sounds = {
  win: new Audio(winSound),
  fail: new Audio(failSound),
  click: new Audio(clickSound),
};

export const playSound = (type: keyof typeof sounds) => {
  const sound = sounds[type];
  sound.currentTime = 0;
  sound.play().catch((e) => {
    console.warn("Audio play error:", e);
  });
};
