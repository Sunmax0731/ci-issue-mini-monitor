# ci-issue-mini-monitor

CI・Issueミニモニター の closed alpha prototype。GitHub Issue優先度、Actions結果、ビルド成功/失敗を小型画面や通知に出す。

## Status

- Version: 0.1.0-alpha.1
- Rank: 46 / P2 / Score 57
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
