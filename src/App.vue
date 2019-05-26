<template>
	<div id="app">
		<!--<el-scrollbar>
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-scrollbar> -->
		<transition name="move" mode="out-in"><router-view></router-view></transition>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'app',
	components: {
		HelloWorld
	}
};
</script>

<style>
#app {
	padding: 0;
	margin-top: 0;
	min-height: auto;
	height: 100%;
	overflow: hidden;
}

body,
html {
	margin: 0;
	padding: 0;
	height: 100%;
}

.el-scrollbar {
	height: 100%;
}
.el-scrollbar__wrap {
	overflow: scroll;
	overflow-x: hidden;
}

/**
::-webkit-scrollbar {
    width: 13px;
    background-color: rgba(255,255,255,.3);
}
 
::-webkit-scrollbar-thumb {
    background: #dbdbdb;
    background-clip: content-box;
}
 
::selection {
    background: rgba(255, 0, 0, .7);
    color: white;
}*/
</style>
