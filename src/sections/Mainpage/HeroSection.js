import React from "react";
import '../../App.css'


export const HeroSection = () => {
  return (
    <div class="hero-section">
    <div class="hero-overlay"> </div>
    <div class="hero-content">
        <h1>Willkommen bei der Sedinum Stiftung</h1>

        <hr className="opacity-50 md:my-10 lg:my-12" />
        <p>
            Die Sedinum Stiftung hat sich der Aufgabe verschrieben, Mensch und Umwelt zu unterstützen und so zu einer besseren Zukunft beizutragen.
        </p>
    </div>
</div>
  );
};
