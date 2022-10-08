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
          <el-input v-model="rentData.unitNo" autocomplete="off" />
        </el-form-item>
        <el-form-item :label="$t('rentCash')" prop="rentCash">
          <el-input v-model="rentData.rentCash" autocomplete="off" />
        </el-form-item>
        <el-form-item :label="$t('rentPeriod')" prop="rentDateRange">
          <el-date-picker
            v-model="rentData.rentDateRange"
            type="daterange"
            :range-separator="$t('to')"
            :start-placeholder="$t('startDate')"
            :end-placeholder="$t('endDate')"
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">CALC</el-button>
          <el-button @click="resetForm">Reset</el-button>
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
import { ref } from "vue";
const rentData = ref({
  unitNo: "",
  rentCash: "0.00",
  rentDateRange: [],
});
const rules = ref({
  unitNo: {},
  rentCash: {
    required: true,
  },
  rentDateRange: {
    required: true,
  },
});
const submitForm = () => {
  console.log(11);
};

const resetForm = () => {
  console.log(222);
};
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
