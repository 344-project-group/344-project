<script>
  // Import necessary Svelte components and libraries
  import { createEventDispatcher } from 'svelte';

  // Function to dispatch events
  const dispatch = createEventDispatcher();

  // Variables to store task details
  let taskName = '';
  let description = '';
  let statusOptions = ['Pending', 'Completed']; // Status options
  let status = statusOptions[0]; // Initialize status
  let assignee = 'John Doe'; // Initialize assignee
  let priority = 'High'; // Initialize priority
  let selectedDetail = null; // To keep track of the detail being edited

  // Function to handle task creation
  function createTask() {
    const taskDetails = {
      name: taskName,
      description: description,
      status: status, // Include status in task details
      assignee: assignee, // Include assignee in task details
      priority: priority // Include priority in task details
      // Add other task details as needed
    };

    // Dispatch 'createTask' event with task details
    dispatch('createTask', taskDetails);

    // Reset input fields
    taskName = '';
    description = '';
  }

  // Function to handle clicking on a task detail
  function editTaskDetail(detail) {
    selectedDetail = detail; // Set the selected detail
  }

  // Function to handle closing the modal
  function closeModal() {
    selectedDetail = null; // Reset the selected detail, effectively closing the modal
  }

  // Function to handle cancel button click
  function cancel() {
    closeModal(); // Close the modal
  }
</script>

<!-- Use Tailwind CSS classes for styling -->
<style>
  @import 'tailwindcss/base.css';
  @import 'tailwindcss/components.css';
  @import 'tailwindcss/utilities.css';
</style>

<!-- SidebarLeft component markup -->
<div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
  <div class="bg-white p-8 rounded-lg w-96">
    <!-- Task Name input -->
    <div class="mb-4">
      <label for="taskName" class="block text-sm font-medium text-gray-700">Task Name</label>
      <input type="text" id="taskName" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" bind:value={taskName}>
    </div>

    <!-- Description input -->
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea id="description" rows="3" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" bind:value={description}></textarea>
    </div>

    <!-- Right section with task details (placeholders) -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">Task Details</h3>
      <div class="flex flex-col space-y-2">
        <!-- Make each task detail clickable -->
        <div on:click={() => editTaskDetail('Status')} class="cursor-pointer">
          <span class="text-gray-600">Status:</span>
          <!-- Use select element for status with options -->
          <select bind:value={status} class="text-gray-800">
            {#each statusOptions as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
        </div>
        <div on:click={() => editTaskDetail('Assignee')} class="cursor-pointer">
          <span class="text-gray-600">Assignee:</span>
          <input type="text" class="text-gray-800" bind:value={assignee}>
        </div>
        <div on:click={() => editTaskDetail('Priority')} class="cursor-pointer">
          <span class="text-gray-600">Priority:</span>
          <select bind:value={priority} class="text-gray-800">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <!-- Add other task details similarly -->
      </div>
    </div>

    <!-- Buttons section -->
    <div class="flex justify-between">
      <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400" on:click={cancel}>Cancel</button>
      <button class="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600" on:click={createTask}>Create Task</button>
    </div>
  </div>
</div>

<!-- Modal for editing task detail -->
{#if selectedDetail}
<div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
  <div class="bg-white p-8 rounded-lg w-96">
    <h3 class="text-lg font-semibold mb-2">Edit {selectedDetail}</h3>
    <!-- Options for editing the selected detail -->
    {#if selectedDetail === 'Status'}
    <!-- Use select element for status with options -->
    <select bind:value={status}>
      {#each statusOptions as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
    {/if}
    {#if selectedDetail === 'Assignee'}
    <!-- Input for editing assignee -->
    <input type="text" bind:value={assignee}>
    {/if}
    {#if selectedDetail === 'Priority'}
    <!-- Select for editing priority -->
    <select bind:value={priority}>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
    {/if}
    <!-- Add other options for editing task details as needed -->
    <!-- Button to close the modal -->
    <div class="mt-4 text-right">
      <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400" on:click={closeModal}>Close</button>
    </div>
  </div>
</div>
{/if}
