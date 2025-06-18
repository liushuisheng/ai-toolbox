<template>
  <div class="snowfall-container">
    <div v-for="i in 150" :key="`snow-${i}`" class="snowflake"></div>
  </div>
</template>

<style scoped>
.snowfall-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 9999;
}

@keyframes snowfall {
  0% {
    transform: translateY(-10vh) translateX(0) rotate(0deg);
  }
  100% {
    transform: translateY(110vh) translateX(var(--end-x)) rotate(360deg);
  }
}

.snowflake {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 50%;
  opacity: var(--opacity);
  animation: snowfall var(--duration) linear infinite;
  animation-delay: var(--delay);
}

.snowflake:nth-child(5n) { --size: 5px; --duration: 10s; --delay: -1s; --opacity: 1; --end-x: -20vw; }
.snowflake:nth-child(5n + 1) { --size: 4px; --duration: 12s; --delay: -5s; --opacity: 0.8; --end-x: 10vw; }
.snowflake:nth-child(5n + 2) { --size: 3px; --duration: 8s; --delay: -3s; --opacity: 0.9; --end-x: 20vw; }
.snowflake:nth-child(5n + 3) { --size: 2px; --duration: 15s; --delay: -7s; --opacity: 0.7; --end-x: -15vw; }
.snowflake:nth-child(5n + 4) { --size: 1px; --duration: 9s; --delay: -4s; --opacity: 0.6; --end-x: 15vw; }

.snowflake:nth-child(7n) { left: 10vw; animation-delay: -3s; }
.snowflake:nth-child(7n + 1) { left: 25vw; animation-delay: -1s; }
.snowflake:nth-child(7n + 2) { left: 40vw; animation-delay: -6s; }
.snowflake:nth-child(7n + 3) { left: 55vw; animation-delay: -8s; }
.snowflake:nth-child(7n + 4) { left: 70vw; animation-delay: -2s; }
.snowflake:nth-child(7n + 5) { left: 85vw; animation-delay: -9s; }
.snowflake:nth-child(7n + 6) { left: 95vw; animation-delay: -5s; }
</style> 