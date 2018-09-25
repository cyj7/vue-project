<template>
	<page :page="page" :pageSize="20"></page>
</template>
<style></style>
<script>
	import Page from "@/components/Page";
	export default {
		name: "Index",
		data(){
			return {
				'page': 1
			}
		},
		components: {
			'page': Page
		},
		methods: {
			getParams(){
				var id = this.$route.params.id;
				this.page = id;
			}
		},
		created(){
			this.getParams();
		},
		watch: {
			'$route'(){
				this.getParams();
			}
		}
	}
</script>