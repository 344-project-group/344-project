<!-- ShortCuts.svelte -->
<script>
    let selectedDate;
  
    /**
	 * @param {Date} date
	 */
    function updateCalendar(date) {
      selectedDate = date;
      // Your code to update the calendar based on the selected date
      // You can also send information about the selected date here
      console.log('Selected Date:', selectedDate);
    }
  </script>
  
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="flex justify-between flex-wrap mb-4">
    
    <div class="btn my-4 px-1 py-2 bg-tertiary-500 text-white rounded-md hover:bg-tertiary-600 text-sm" on:click={() => updateCalendar(new Date())}>
      Today
    </div>
  
    <div class="btn my-4 px-1 py-2 bg-tertiary-500 text-white rounded-md hover:bg-tertiary-600 text-sm" on:click={() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      updateCalendar(tomorrow);
    }}>
      Tomorrow
    </div>
  
    <div class="btn my-4 px-1 py-2 bg-tertiary-500 text-white rounded-md hover:bg-tertiary-600 text-sm" on:click={() => {
      const startOfWeek = new Date();
      const diff = startOfWeek.getDay() - 1;
      startOfWeek.setDate(startOfWeek.getDate() - diff);
      updateCalendar(startOfWeek);
    }}>
      This Week
    </div>
  
    <div class="btn my-4 px-1 py-2 bg-tertiary-500 text-white rounded-md hover:bg-tertiary-600 text-sm" on:click={() => {
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      updateCalendar(startOfMonth);
    }}>
      This Month
    </div>
  </div>