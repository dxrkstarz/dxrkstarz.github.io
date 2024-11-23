* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

body {
  background: linear-gradient(-16deg, #000, #000, #fff, #fff);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#desktop {
  flex: 1;
  position: relative;
  padding: 1rem;
}

#taskbar {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  max-width: 1200px;
  height: 64px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.dateAndTime {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-left: auto;
}

.dateAndTime:hover {
  background: rgba(255, 255, 255, 0.1);
}

#quickSettings {
  position: absolute;
  bottom: 80px;
  right: 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: bottom right;
}

.flex {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.flexRow {
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.toggleGroup {
  display: flex;
  gap: 0.75rem;
}

.WiFiQuickSetting,
.BluetoothQuickSetting {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.WiFiQuickSetting:hover,
.BluetoothQuickSetting:hover {
  background: rgba(255, 255, 255, 0.1);
}

.sliderControl {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.sliderControl img {
  flex-shrink: 0;
}

.sliderControl .text-s {
  min-width: 70px;
}

.text-m {
  font-size: 0.9rem;
  font-weight: 500;
}

.text-s {
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
}

img {
  width: 20px;
  height: 20px;
  filter: invert(1);
  opacity: 0.8;
}

input[type="checkbox"] {
  appearance: none;
  width: 40px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
}

input[type="checkbox"]:checked {
  background: #2196F3;
}

input[type="checkbox"]::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  background: white;
  transition: transform 0.3s ease;
}

input[type="checkbox"]:checked::before {
  transform: translateX(16px);
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;
  flex: 1;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.brightnessOverlay {
  width: 100vw;
  height: 100vh;
}

#startMenu {
  position: absolute;
  bottom: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform-origin: bottom left;
  margin-bottom: 10px;
}

.taskItem {
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  height: 80%;
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;
}

.taskItem:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
}

.hidden {
  opacity: 0;
  transform: scale(0.95);
  pointer-events: none;
  display: none;
}

#startMenuSettingsBtn {
  background-color: transparent;
  padding: 12px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  border: none;
  transition: background 0.3s ease;
  cursor: pointer;
}

#startMenuSettingsBtn:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

#taskbarsearch {
  position: absolute;
  border: 1px solid #fff;
  border-radius: 0.75rem;
  background-color: transparent;
  padding: 8px 32px;
  height: 80%;
  width: 225px;
  left: 70px;
  transition: background 0.3s ease;
}

#taskbarsearch:focus,
#taskbarsearch:hover {
  outline: none;
  background-color: rgba(255, 255, 255, 0.3);
}

#taskbarsearch::placeholder {
  color: #fff;
}
