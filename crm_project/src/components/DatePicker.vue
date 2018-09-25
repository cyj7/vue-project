<template>
	<div class="data-picker">
		<el-date-picker
		  class="data-picker-dom"
	      v-model="value"
	      type="daterange"
	      align="right"
	      unlink-panels
	      range-separator="~"
	      start-placeholder="开始日期"
	      end-placeholder="结束日期"
	      value-format="timestamp"
	      change="changeFn(val)"
	      popper-class="data-picker-down"
	      :editable='false'
	      :picker-options="pickerOptions2">
	    </el-date-picker>
	</div>
</template>
<script>
	export default {
		name: "DatePicker",
		components: {

		},
		data() {
	      return {
	        pickerOptions2: {
	          shortcuts: [{
	            text: '最近一周',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
	              picker.$emit('pick', [start, end]);
	            }
	          }, {
	            text: '最近一个月',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
	              picker.$emit('pick', [start, end]);
	            }
	          }, {
	            text: '最近三个月',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
	              picker.$emit('pick', [start, end]);
	            }
	          }]
	        },
	        value: ''
	      };
	    },
	    watch: {
	    	"value": function(val){
	    		console.log(val,'=====')
	    	}
	    }
	}
</script>
<style lang="scss" scoped>
	.data-picker{
		.data-picker-dom{
			width: 280px;
			padding: 3px 0 3px 5px;
			&.is-active{
				border-color: #dcdfe6;
			}
		}
		.data-picker-down{
			.el-picker-panel__sidebar{
				position: relative;
			}
		}
	}
</style>