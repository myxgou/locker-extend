<template>
  <div class="content-board">
    <div class="header-board">
      <div>
        <el-icon>
          <Calendar />
        </el-icon>
        <label for="">{{ $t("rentcalculator") }}</label>
        <el-icon>
          <QuestionFilled />
        </el-icon>
      </div>
      <el-icon :size="20">
        <Setting />
      </el-icon>
    </div>
    <div class="body-board">
      <el-form
        ref="rentFormRef"
        :model="rentData"
        status-icon
        :rules="rules"
        label-width="120px"
      >
        <el-form-item :label="$t('unitNo')" prop="unitNo">
          <el-input v-model="rentData.unitNo" autocomplete="off" clearable/>
        </el-form-item>
        <el-form-item :label="$t('rentCash')" prop="rentCash">
          <el-input :placeholder="$t('enterRent')" @keyup="rentCashParser" v-model="rentData.rentCash" autocomplete="off" clearable/>
        </el-form-item>
        <el-form-item :label="$t('leaseType')" prop="leaseType">
          <el-select
            v-model="rentData.leaseType"
            :placeholder="$t('selectLeaseType')"
            size="large"
          >
            <el-option
              v-for="item in leaseTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input-number size="large" class="lease-type-number" v-model="rentData.leaseTypeNumber" :min="1" :disabled="rentData.leaseTypeNumberDisabled" />
        </el-form-item>
        <el-form-item :label="$t('leaseTerm')" prop="leaseTerm">
          <el-date-picker
            v-model="rentData.leaseTerm"
            type="daterange"
            :range-separator="$t('to')"
            :start-placeholder="$t('startDate')"
            :end-placeholder="$t('endDate')"
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">{{$t('calc')}}</el-button>
          <el-button @click="resetForm">{{$t('reset')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="bottom-board">
      <img src="@assets/images/logo.jpg" alt="" />
      <label for="">Powered By W2S v1.0</label>
      <a href="mailto:service@way2.store">
        <el-icon :size="15">
          <Message />
        </el-icon>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, getCurrentInstance, watch } from "vue";
const { $config, $t } = getCurrentInstance()?.appContext.app.config.globalProperties;
import app from "@/util/app";

const rentData = reactive({
  unitNo: "",
  rentCash: '',
  leaseTypeNumber: 1,
  leaseTypeNumberDisabled: false,
  leaseType: $config?.rent.leaseTypeByMonth,
  leaseTerm: [],
});

const leaseTypeList = computed(() =>
  {
    return $config?.rent?.leaseTypeList?.map((item: { label: string, value: any }) => {
      let mixItem = item;
      mixItem.label = $t(item.label);
      return mixItem
    }) ?? [];
  }
);
const rules = ref({
  unitNo: {},
  leaseType: "",
  rentCash: {
    required: true,
  },
  leaseTerm: {
    required: true,
  },
});

watch(() => [rentData.leaseType, rentData.leaseTerm], (newValue, oldValue) => {
  rentData.leaseTypeNumberDisabled = false;
  console.log(newValue, oldValue);
})

const submitForm = () => {
  console.log(11);
};

const resetForm = () => {
  rentData.unitNo = ''
  rentData.rentCash = '0.00'
  rentData.leaseTypeNumber = 1;
  rentData.leaseTypeNumberDisabled = false;
  rentData.leaseTerm = []
  rentData.leaseType = $config?.rent.leaseTypeByMonth
};

const rentCashParser = () => {
  rentData.rentCash = `${$config.rent.cashUnit} ${app.util.toCash(rentData.rentCash)}` 
}

</script>
<style lang="scss" scoped>
.content-board {
  display: flex;
  flex-direction: column;
  .header-board {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    & > div:first-child {
      display: flex;
      align-items: center;
      & > label {
        margin: 0 5px;
        font-size: 16px;
        color: #333;
      }
      & > *:last-child {
        color: #666666;
      }
    }
    & > *:last-child {
      color: #409eff;
    }
  }

  .body-board {
    flex: 1;
    display: flex;
    flex-direction: column;
    .lease-type-number {
      margin-left: 15px;
    }
  }
  .bottom-board {
    height: 30px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    & > label {
      margin: 0 5px;
      color: #999999;
      font-size: 14px;
      font-style: oblique;
    }
    & > *:last-child {
      color: #409eff;
      line-height: 0;
    }
    & > img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
