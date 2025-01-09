Minimum reproducible example for a weird Firefox bug.

**Expected behavior (Chrome and Safari)**: Page completes parsing, displays all numbers up to 118029, doesn't act as if page is still loading indefinitely.

**Observed behavior (Firefox)**: Page stops parsing at some point, displays all numbers up to ~85000 (sometimes more, sometimes less), acts as if page is stuck loading indefinitely.