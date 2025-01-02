<template>
  <main h-screen w-full overflow-hidden>
    <LayoutAppMenuBar />
    <div flex overflow-hidden class="main-content">
      <LayoutAppPrimarySidebar hidden md:block />
      <LayoutAppExplorer hidden h-full overflow-x-hidden overflow-y-auto lg:block />
      <div w-full>
        <LayoutAppNavbar w-full overflow-x-auto />
        <div h-full w-full overflow-x-hidden overflow-y-auto px-4 pb-16 pt-6 font-mono md:px-8 sm:px-6 md:pt-8>
          <slot />
        </div>
      </div>
    </div>
    <LayoutAppStatusBar />
  </main>
</template>

<style scoped>
.main-content {
  height: calc(100% - 33px - 22px);
}
</style>
