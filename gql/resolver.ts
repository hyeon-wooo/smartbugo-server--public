import convertGeo from "../lib/convertGeo";

const queryResolver = require("./queryResolver");
const mutationResolver = require("./mutationResolver");

module.exports = {
  // # Query #
  countForMain: queryResolver.main3,
  login: queryResolver.user1,
  loginNormal: queryResolver.user2,
  getTypeByToken: queryResolver.user3,
  getMaster: queryResolver.user4,

  getAppliedBugoAndAccount: queryResolver.account1,
  getMyCalcAccount: queryResolver.account2,
  getMyCalcPrice: queryResolver.account3,

  getBugoList: queryResolver.bugo1,
  getAppliedSangju: queryResolver.bugo2,
  getMyBugoList: queryResolver.bugo3,

  getMsgByBugoId: queryResolver.msg1,

  getFlowerByCategory: queryResolver.flower1,
  getMyFlower: queryResolver.flower2,
  getFlowerById: queryResolver.flower3,
  getFlowerSenderByBugoId: queryResolver.flower4,

  appliedService: queryResolver.log1,
  bugoListOfMaster: queryResolver.log2,
  flowerOfMaster: queryResolver.log3,
  flowerOrderData: queryResolver.log4,

  getFAQ: queryResolver.faq,
  totalSangju: queryResolver.main1,
  myName: queryResolver.main2,
  myPhone: queryResolver.payment1,
  myInfo: queryResolver.etc1,
  etcContent: queryResolver.etc2,

  // # Mutation #
  registerUser: mutationResolver.user1,
  confirmCode: mutationResolver.user2,

  checkId: mutationResolver.user3,
  checkDI: mutationResolver.user4,
  updateMaster: mutationResolver.user5,
  registerAccount: mutationResolver.account1,
  confirmAccount: mutationResolver.account2,
  addMsg: mutationResolver.msg1,
  createBugo: mutationResolver.bugo1,
  updateBugo: mutationResolver.bugo2,
  deleteBugo: mutationResolver.bugo3,
  sendAccount: mutationResolver.send1,
  // sendPaymentAccount: () => true,
  paymentFlower: mutationResolver.payment1,
  appliedLog: mutationResolver.payment2,
  counsel: mutationResolver.counsel,
  leave: mutationResolver.leave,
  appliableSangju: mutationResolver.payment3,
  confirmPayment: mutationResolver.payment4,
  plusCount: mutationResolver.etc1,
  test: mutationResolver.test,
};
