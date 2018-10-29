<template>
	<div :class="selectShow ? 'drop-down drop-active' : 'drop-down'">
		<button class="drop-title" @click="dropDown" :data-id="selectVal">{{ selectText }}</button>
		<ul class="drop-ul">
			<li v-for="(item ,key) in data" :key="key"><a href="javascript:;" @click="checkSelect(item.value, item.id)">{{item.value}}</a></li>
		</ul>
	</div>
</template>
<script>
	export default{
		name: "Select",
		data() {
			return{
				// 'selectArr': [{"id": 0, "value": "全部选择"},{"id": 1, "value": "选择1"},{"id": 2, "value": "选择2"},{"id": 3, "value": "选择3333333"}],
				'selectText': "请选择",
				'selectVal': 0,
				'selectShow': false
			}
		},
		props: ['data'],
		created(){
			var _this = this;
			document.addEventListener("click", function(){ //点击其他地方select收起
				_this.selectShow = false;
			});
			// for(let i=0; i<this.data, i++){ //默认选中

			// }
		},
		mounted(){
			let data = this.data;
			for(let i=0; i<data.length; i++){ //默认选中
				if(data[i].checked){
					this.selectText = data[i].value;
					this.selectVal = data[i].id;
				}
			}
			this.$emit("default", this.selectVal)
		},
		methods: {
			dropDown: function(){
				event.stopPropagation();
				var isShow = this.selectShow;
				this.selectShow = !isShow;
			},
			checkSelect: function(txt, val){
				this.selectVal = val;
				this.selectText = txt;
				this.selectShow = false;
				this.$emit("change", val, txt);
			}
		}
	}
</script>
<style lang="scss" scoped>

.drop-down{
	position: relative;
	width: 170px;
	z-index: 9;
	display: inline-block;
	.drop-title{
		padding: 0 25px 0 10px;
		position: relative;
		@extend .btn;
		width: 100%;
		text-align: left;
		z-index: 9;
	}
	.drop-title:after{
		display: inline-block;
		content: "";
		width: 0;
		height: 0;
		border: 5px dashed transparent;
		border-top: 5px solid #d1d1d1;
		position: absolute;
		right: 10px;
		top: 12px;
	}
	.drop-ul{
	 	position: absolute;
		top: 29px;
		left: 0;
		border: 1px solid #d1d1d1;
		padding: 5px 0;
		max-height: 200px;
		overflow-x: hidden;
		overflow-y: scroll;
		display: none;
		width: 100%;
		background: #fff;
		a{
			display: inline-block;
			width: 100%;
			height: 30px;
			line-height: 30px;
			padding: 0 10px;
			&:hover{
				background: #fff2ec;
	  			color: inherit;
			}
		}
		
	}
	&.drop-active{
		.drop-ul{
			display: block;
		}
	}
}


// .drop-down .drop-ul a:hover
//   background: #fff2ec
//   color: inherit

// .drop-down.drop-active .drop-ul
//   display: block

</style>