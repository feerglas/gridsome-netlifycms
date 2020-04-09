<template>
  <div>
    <slot/>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style>
body{
  background-color: #f4f4f4;
  padding: 0;
  margin: 0;
}
</style>
