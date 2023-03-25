import React from "react";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div>
        <h3 class="text-xl font-bold">Projects</h3>
        <div class="mt-3 space-y-4">
          <div class="checkbox-container">
            <input type="checkbox" class="color-scoreboard" checked />
            <p class="label">Scoreboard</p>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" class="color-flight" checked />
            <p class="label">Flight Booking</p>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" class="color-productCart" checked />
            <p class="label">Product Cart</p>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" class="color-bookstore" checked />
            <p class="label">Book Store</p>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" class="color-blog" checked />
            <p class="label">Blog Application</p>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" class="color-jobFinder" checked />
            <p class="label">Job Finder</p>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h3 class="text-xl font-bold">Team Members</h3>
        <div class="mt-3 space-y-4">
          <div class="checkbox-container">
            <img src="./images/avatars/sumit.png" class="team-avater" />
            <p class="label">Sumit Saha</p>
          </div>

          <div class="checkbox-container">
            <img src="./images/avatars/sadh.png" class="team-avater" />
            <p class="label">Sadh Hasan</p>
          </div>

          <div class="checkbox-container">
            <img src="./images/avatars/akash.png" class="team-avater" />
            <p class="label">Akash Ahmed</p>
          </div>

          <div class="checkbox-container">
            <img src="./images/avatars/salahuddin.png" class="team-avater" />
            <p class="label">Md Salahuddin</p>
          </div>

          <div class="checkbox-container">
            <img src="./images/avatars/riyadh.png" class="team-avater" />
            <p class="label">Riyadh Hassan</p>
          </div>

          <div class="checkbox-container">
            <img src="./images/avatars/ferdous.png" class="team-avater" />
            <p class="label">Ferdous Hassan</p>
          </div>

          <div class="checkbox-container">
            <img src="./images/avatars/almas.png" class="team-avater" />
            <p class="label">Arif Almas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
