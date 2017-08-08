<template>
  <div class="ks-card card">
    <div class="casssssrd">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <span class="icon is-medium">
              <i :class="'fa fa-' + icon"></i>
            </span>
          </div>
          <div class="media-content">
            <p class="title is-4">{{title}}</p>
            <p class="subtitle is-6">{{subtitle}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'icon', 'title', 'subtitle' ]
}
</script>

<style>
.mesTsage {  color: blue;}
</style>
