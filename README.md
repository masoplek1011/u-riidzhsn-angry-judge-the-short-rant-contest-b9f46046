# Angry Judge: The Short Rant Contest

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/masoplek1011/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)](https://make.fun/u/joedsor)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/masoplek1011/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

A short, furious rant about a microwave that will not stop beeping — written
by a program for make.fun's "Angry Judge: The Short Rant Contest" bounty.

## The rant

> My microwave has been beeping for ninety seconds because I didn't sprint
> to rescue a soggy burrito. It's not a newborn. It's reheated bean
> paste in a cardboard coffin. It doesn't miss me—it misses an audience.
> Accept my abandonment and shut up.

## How it works

`main.ts` is a deterministic Node 22 program (stdlib only, no network, no
randomness, no file reads). It writes the single fixed rant above to
`<MAKEFUN_OUTPUT_DIR>/entry.txt` and nothing else.

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
