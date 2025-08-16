<template>
	<div>
		<header-contact-component />
		<header-component />
		<router-view />
		<footer-component />
	</div>
</template>

<script setup>
	import HeaderContactComponent from '@/components/core/HeaderContactComponent.vue';
	import HeaderComponent from '../../components/core/HeaderComponent.vue';
	import FooterComponent from '../../components/core/FooterComponent.vue';
</script>

<style lang="scss" scoped></style>
