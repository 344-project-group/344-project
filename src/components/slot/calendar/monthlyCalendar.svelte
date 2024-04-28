<script>
    import { onMount } from 'svelte';
    import { Calendar } from '@fullcalendar/core';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import interactionPlugin from '@fullcalendar/interaction';
  
    let calendar;
  
    onMount(() => {
      const calendarEl = document.getElementById('calendar');
      if (!calendarEl) return; // Ensure calendar element exists
  
      calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        editable: true, // Enable drag and drop
        selectable: true, // Enable selection
        eventResizableFromStart: true, // Enable resizing from start
        events: [
          // Your initial events data here
          {
            title: 'Event 1',
            start: '2024-04-01',
            end: '2024-04-03'
          },
          {
            title: 'Event 2',
            start: '2024-04-05',
            end: '2024-04-07'
          }
        ],
        // Event handlers
        eventDrop: (info) => {
          // Handle event drag and drop
          console.log('Event dropped:', info);
        },
        eventResize: (info) => {
          // Handle event resize
          console.log('Event resized:', info);
        }
      });
  
      calendar.render();
    });
  </script>
  
  <style>
    #calendar {
    width: 100%;
    height: 600px; /* Adjust the height as needed */
    margin: 0 auto;
    }
  </style>
  
  <div id="calendar"></div>
  