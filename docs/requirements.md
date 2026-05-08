# 要件定義

- Repo: `ci-issue-mini-monitor`
- Domain: IoT
- Rank: 46 / P2 / Score 57
- Idea No: 15
- アイデア名: CI・Issueミニモニター
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
GitHub Issue優先度、Actions結果、ビルド成功/失敗を小型画面や通知に出す。

## 課題
Web画面を開くほどではない変化を見逃しやすい。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
