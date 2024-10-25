<template>
  <div class="py-4 px-4 bg-white">
    <h2 class="text-xl font-semibold mb-2 text-gray-600">
      Manage Account Roles
    </h2>
    <p class="text-gray-600 mb-4">
      Create new roles or edit permissions for current users.
    </p>
    <div class="flex justify-between items-center mb-4">
      <div class="flex space-x-4">
        <button
          class="text-blue-600 border-b-2 border-blue-600 pb-1 flex items-center"
        >
          <User class="w-4 h-4 mr-1" />
          Members
        </button>
        <button
          class="text-gray-600 hover:text-blue-600 pb-1 flex items-center"
        >
          <Hourglass class="w-4 h-4 mr-1" />
          Pending Invitations
        </button>
      </div>
      <div class="text-gray-600 flex items-center">
        Allowed Manager(s): <span class="font-semibold ml-1">1</span>
        <button
          class="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 focus:outline-none ml-4 flex items-center"
        >
          <Plus class="w-4 h-4 mr-1" />
          Assign Role
        </button>
      </div>
    </div>
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th
            class="px-4 py-2 text-left text-gray-700 border-b border-gray-200"
          >
            Email
          </th>
          <th
            class="px-4 py-2 text-left text-gray-700 border-b border-gray-200"
          >
            Role
          </th>
          <th
            class="px-4 py-2 text-left text-gray-700 border-b border-gray-200"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-blue-50">
          <td class="px-4 py-2 border-b border-gray-200">
            Tewodros Misawoy<br />
            <span class="text-gray-600">tewodrosm01@gmail.com</span>
          </td>
          <td class="px-4 py-2 border-b border-gray-200">Owner</td>
          <td class="px-4 py-2 border-b border-gray-200"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { User, Hourglass, Plus } from "lucide-vue-next";
</script>
