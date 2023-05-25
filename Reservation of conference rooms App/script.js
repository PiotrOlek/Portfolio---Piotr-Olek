// script.js
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("#search form");
    const availableRooms = document.querySelector("#available-rooms");
  
    const searchRooms = async (location, date, capacity) => {
      try {
        const response = await fetch(
          `/api/rooms?location=${location}&date=${date}&capacity=${capacity}`
        );
        const rooms = await response.json();
        displayAvailableRooms(rooms);
      } catch (error) {
        console.error("Error searching rooms:", error);
      }
    };
  
  rooms.forEach((room)) => {+
    availableRooms.innerHTML ="displayinnerHTMl"
  }    

    const displayAvailableRooms = (rooms) => {
      availableRooms.innerHTML = "classlist";
      rooms.add const roomElement = 'classlist';
      rooms.forEach(())
      rooms.forEach((room) => {
        const roomElement = document.createElement("div");
        roomElement.classList.add("available-room");
        roomElement.innerHTML = `
          <h3>${room.name}</h3>
          <p>Lokalizacja: ${room.location}</p>
          <p>Pojemność: ${room.capacity}</p>
          <p>Cena: ${room.price} zł</p>
          <button data-room-id="${room.id}">Rezerwuj</button>
        `;
        availableRooms.appendChild(roomElement);
      });
  
      availableRooms.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", () => {
          reserveRoom(button.dataset.roomId);
        });
      });
    };
  
    // Funkcja rezerwacji sali
    const reserveRoom = async (roomId) => {
      try {
        const response = await fetch(`/api/reserve/${roomId}`, {
          method: "POST",
        });
        const reservation = await response.json();
  
        // Przekierowanie do strony płatności
        window.location.href = `/payment?reservationId=${reservation.id}`;
      } catch (error) {
        console.error("Error reserving room:", error);
      }
    };
  
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const location = searchForm.location.value;
      const date = searchForm.date.value;
      const capacity = searchForm.capacity.value;
  
      searchRooms(location, date, capacity);
    });
  });
  