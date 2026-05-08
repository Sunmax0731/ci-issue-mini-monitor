export const productProfile = {
  "repo": "ci-issue-mini-monitor",
  "title": "CI・Issueミニモニター",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 46,
  "tier": "P2",
  "score": 57,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "GitHub Issue優先度、Actions結果、ビルド成功/失敗を小型画面や通知に出す。",
  "problem": "Web画面を開くほどではない変化を見逃しやすい。",
  "differentiation": "机上に置いて自然に見える作業状態表示にする。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
