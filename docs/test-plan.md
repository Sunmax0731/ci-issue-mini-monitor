# テスト計画

- Repo: `ci-issue-mini-monitor`
- Domain: IoT
- Rank: 46 / P2 / Score 57
- Idea No: 15
- アイデア名: CI・Issueミニモニター
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\ci-issue-mini-monitor`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/ci-issue-mini-monitor-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
