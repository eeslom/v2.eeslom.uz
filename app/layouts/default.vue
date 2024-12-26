<template>
  <main h-screen w-full overflow-hidden>
    <AppMenuBar />
    <div flex overflow-hidden class="main-content">
      <AppPrimarySidebar hidden lg:block />
      <AppExplorer hidden md:block />
      <div w-full>
        <AppNavbar w-full overflow-x-auto />
        <div h-full w-full overflow-x-hidden overflow-y-auto px-4 pb-16 pt-6 font-mono md:px-8 sm:px-6 md:pt-8>
          <slot />
        </div>
      </div>
    </div>
    <AppStatusBar />
  </main>
</template>

<style scoped>
.main-content {
  height: calc(100% - 33px - 22px);
}
</style>
