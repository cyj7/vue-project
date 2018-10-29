<!-- 菜单操作弹层 -->
<template>
	<section class="alert-model" v-show="show">
		<div class="mask"></div>
		<div class="alert-main">
			<span class="close-icon"></span>
			<div class="alert-tit">添加|编辑菜单信息</div>
			<div class="alert-body">
				<p class="alert-item" v-for="item,index in formData" v-if="item.type!='select'">
					<label for="">{{item.text}}<span class="red-star" v-if="item.required">*</span></label>
					<input :type="item.type" class="inp" v-model="item.value">
				</p>
				<!-- <p class="alert-item">
					<label for="">菜单链接<span class="red-star">*</span></label>
					<input type="text" class="inp" v-model="formData[1].value">
				</p> -->
				<!-- <p class="alert-item">
					<label for="">排序</label>
					<input type="number" class="inp">
				</p>
				<p class="alert-item">
					<label for="">菜单权限</label>
					<input type="text" class="inp">
				</p>
				<p class="alert-item">
					<label for="">菜单样式</label>
					<input type="text" class="inp">
				</p> -->
				<p class="alert-item" v-else>
					<label for="">是否显示<span class="red-star" v-if="item.required">*</span></label>
					<select-dom :data="item.selectData" @change="changeFn" @default="defaultFn"></select-dom>
				</p>
				<p class="error" v-show="!!errorMsg">{{errorMsg}}</p>
			</div>
			<p class="alert-btn-box">
				<button class="cancel" @click="cancelFn">取消</button>
				<button class="confirm" type="submit" @click="submit">确定</button>
			</p>
		</div>
	</section>
</template>
<script>
	import MySelect from "@/components/MySelect"; //select 选择框
	export default {
		name: 'MenuHandleAlert',
		data() {
			return {
				// "selectData": [{"id": 0, "value": "显示"},{"id": 1, "value": "隐藏"}],
				"modelShow": false, //弹层是否
				"formData": [
					{"text": "菜单名称", "value": "","type": "text", "name": "menuName", "required": true},
					{"text": "菜单链接", "value": "","type": "text", "name": "menuLink", "required": true},
					{"text": "排序", "value": "","type": "number", "name": "menuSort"},
					{"text": "菜单权限", "value": "","type": "text", "name": "menuPower"},
					{"text": "菜单样式", "value": "","type": "text", "name": "menuCss"},
					{"text": "是否显示", "value": "","type": "select", "name": "isShow", "required": true, "selectData": [{"id": 1, "value": "显示"},{"id": 2, "value": "隐藏"}]}
				],
				"errorMsg": ""
			}
		},
		props: ["show"],
		components: {
			"select-dom": MySelect,
		},
		methods: {
			changeFn(val){
				this.formData[5].value = val;
			},
			defaultFn(val){
				this.formData[5].selectData.value = val;
			},
			cancelFn(){ //取消弹层
				let formData = this.formData;
				for(let i = 0; i<formData.length; i++){
					formData[i].value = "";
				}
				this.errorMsg = "";
				this.$emit("cancel");
			},
			// confirm(){
			// 	console.log("confirm",'==');

			// 	// this.$emit("confirm");
			// },
			submit(){
				let data = {};
				let formData = this.formData;
				for(let i = 0; i<formData.length; i++){
					let val = formData[i].value;
					let name = formData[i].name;
					let required = formData[i].required;
					if(val != ""){
						data[name] = val;
					}else{
						if(required){
							this.errorMsg = `请输入${formData[i].text}`;
							console.log(name, '必填');
							return false;
						}
					}
				}

				console.log(this, "submit",'=1=');

				this.$emit("confirm", data);
			}
		}
	}
</script>
<style lang='scss' scoped>
	.alert-model{
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 9999;
		top: 0;
		left: 0;
	}
	.mask{
		background: #000;
		opacity: .6;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.alert-main{
		position: absolute;
		z-index: 2;
		width: 600px;
		padding: 20px;
		background: #fff;
		left: 50%;
		margin-left: -300px;
		.alert-item{
			margin-top: 15px;
		}
		label{
			display: inline-block;
			width: 80px;
			text-align: right;
			margin-right: 10px;
		}
		.red-star{ 
			margin-left: 5px;
		}
		.alert-btn-box{
			border-top: 1px solid $borderColor;
			padding-top: 15px;
			margin-top: 15px;
			text-align: center;
		}
		.cancel{
			margin-right: 10px;
		}
	}

	.error{ 
		color: $redColor;
		padding: 10px 0 0 90px;
	}
	
</style>