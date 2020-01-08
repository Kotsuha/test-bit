# test-bit
Try Bit.

<style>
  img { border: solid thin; }
</style>

## 過程記錄

Reference: [Bit for NodeJS](https://docs.bit.dev/docs/tutorials/bit-nodejs-tutorial)

```cmd

D:\PortableApps\Cmder\cmder
λ cd \

D:\
λ git clone https://github.com/Kotsuha/test-bit.git
Cloning into 'test-bit'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.

D:\
λ cd test-bit\

D:\test-bit (master -> origin)
λ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (test-bit)
version: (1.0.0)
description: Test how to use Bit.
entry point: (index.js)
test command:
git repository: (https://github.com/Kotsuha/test-bit.git)
keywords:
author: Kotsuha
license: (ISC)
About to write to D:\test-bit\package.json:

{
  "name": "test-bit",
  "version": "1.0.0",
  "description": "Test how to use Bit.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Kotsuha/test-bit.git"
  },
  "author": "Kotsuha",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Kotsuha/test-bit/issues"
  },
  "homepage": "https://github.com/Kotsuha/test-bit#readme"
}


Is this OK? (yes) y

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ mkdir lib

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ cd lib\

D:\test-bit\lib (master -> origin)
λ vim foo.js
```

```js
"use strict";

function test() {
    console.log("foo!");
}

const foo = {
    test: test
};

module.exports = foo;


```

```cmd

D:\test-bit\lib (master -> origin)
λ vim var.js
```

```js
"use strict";

function test() {
    console.log("bar!");
}

const bar = {
    test: test
};

module.exports = bar;


```

```cmd

D:\test-bit\lib (master -> origin)
λ mv var.js bar.js

D:\test-bit\lib (master -> origin)
λ dir
 磁碟區 D 中的磁碟是 Data
 磁碟區序號:  5EF9-42B0

 D:\test-bit\lib 的目錄

2020/01/08  上午 12:28    <DIR>          .
2020/01/08  上午 12:28    <DIR>          ..
2020/01/08  上午 12:27               111 bar.js
2020/01/08  上午 12:25               111 foo.js
               2 個檔案             222 位元組
               2 個目錄  302,124,298,240 位元組可用

D:\test-bit\lib (master -> origin)
λ cd ..

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ vim index.js
```

```js
"use strict";

const foo = require("./lib/foo");
const bar = require("./lib/bar");

foo.test();
bar.test();


```

```cmd

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ node start
internal/modules/cjs/loader.js:638
    throw err;
    ^

Error: Cannot find module 'D:\test-bit\start'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ npm start
npm ERR! missing script: start

npm ERR! A complete log of this run can be found in:
npm ERR!     D:\Users\user\AppData\Roaming\npm-cache\_logs\2020-01-07T16_35_59_994Z-debug.log

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ node index
foo!
bar!

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ $bit --version
'$bit' 不是內部或外部命令、可執行的程式或批次檔。

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ npm install bit-bin --global
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated stylable@5.2.2: Use https://www.npmjs.com/package/@stylable/core instead, see https://www.stylable.io for the latest documentation
npm WARN deprecated json-parser@1.1.5: `json-parser` is deprecated. Please use `comment-json` instead
npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
D:\Users\user\AppData\Roaming\npm\bit -> D:\Users\user\AppData\Roaming\npm\node_modules\bit-bin\bin\bit.js

> core-js@2.6.11 postinstall D:\Users\user\AppData\Roaming\npm\node_modules\bit-bin\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\bit-bin\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ bit-bin@14.7.1
added 742 packages from 838 contributors in 149.533s

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ n$bit --version
'$bit' 不是內部或外部命令、可執行的程式或批次檔。

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ $bit --version
'$bit' 不是內部或外部命令、可執行的程式或批次檔。

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ bit --version
14.7.1

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ bit login
help us prioritize new features and bug fixes by enabling us to collect anonymous statistics about your usage. sharing anonymous usage information is completely voluntary and helps us improve Bit and build a better product.
for more information see analytics documentation - https://docs.bit.dev/docs/conf-analytics
would you like to help Bit with anonymous usage analytics? [yes(y)/no(n)]:  (yes) y
Your browser has been opened to visit:
https://bit.dev/bit-login?port=8085&clientId=●●●●●●●●-●●●●-●●●●-●●●●-●●●●●●●●●●●●&responseType=token&deviceName=●●●●●●●●&os=win32

successfully added @bit as a scoped registry at C:\Users\user\.npmrc
success! logged in as kotsuha

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git commit -a -m "Make a simple node project"
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
        index.js
        lib/
        package.json

nothing added to commit but untracked files present

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git add -a
error: unknown switch `a'
usage: git add [<options>] [--] <pathspec>...

    -n, --dry-run         dry run
    -v, --verbose         be verbose

    -i, --interactive     interactive picking
    -p, --patch           select hunks interactively
    -e, --edit            edit current diff and apply
    -f, --force           allow adding otherwise ignored files
    -u, --update          update tracked files
    --renormalize         renormalize EOL of tracked files (implies -u)
    -N, --intent-to-add   record only the fact that the path will be added later
    -A, --all             add changes from all tracked and untracked files
    --ignore-removal      ignore paths removed in the working tree (same as --no-all)
    --refresh             don't add, only refresh the index
    --ignore-errors       just skip files which cannot be added because of errors
    --ignore-missing      check if - even missing - files are ignored in dry run
    --chmod <(+/-)x>      override the executable bit of the listed files


D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git add -A
warning: LF will be replaced by CRLF in index.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in lib/bar.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in lib/foo.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git reset

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.js
        lib/
        package.json

nothing added to commit but untracked files present (use "git add" to track)

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git config --get core.autocrlf
true

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git config --global core.autocrlf false

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git config --glet core.autocrlf
false

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git cadd -A

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ ggit commit -a -m "Make a simple node project"
[master e78cb4d] Make a simple node project
 4 files changed, 51 insertions(+)
 create mode 100644 index.js
 create mode 100644 lib/bar.js
 create mode 100644 lib/foo.js
 create mode 100644 package.json

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git log
commit e78cb4d5c876d99f187e7ea67d7f1e24d1480da3 (HEAD -> master)
Author: Kotsuha <●●●●●●●●@●●●●●.●●●>
Date:   Wed Jan 8 01:25:06 2020 +0800

    Make a simple node project

commit 795f1e47b206e4038b692cc9c41272ad6cba4b0c (origin/master, origin/HEAD)
Author: Kotsuha <●●●●●●●●@●●●●●.●●●>
Date:   Tue Jan 7 21:24:54 2020 +0800

    Initial commit

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ bit init
successfully initialized a bit workspace.

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git add .bitmap

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git commit -am "initialized an emtpy bit workspace"
[master aa59fdf] initialized an emtpy bit workspace
 2 files changed, 11 insertions(+), 1 deletion(-)
 create mode 100644 .bitmap

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ bit add lib/*.js
tracking 2 new components

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ bit status
new components
(use "bit tag --all [version]" to lock a version with all your changes)

     > bar ... ok
     > foo ... ok

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ bit tag --all 0.9.6 --message "initial component version"
  building components...
2 component(s) tagged
(use "bit export [collection]" to push these components to a remote")
(use "bit untag" to unstage versions)

new components
(first version for components)
     > bar@0.9.6
     > foo@0.9.6

```

![](README/bit-create-collection.png)

```cmd

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ bit export kotsuha.test-bit
exported 2 components to scope kotsuha.test-bit

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .bitmap

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        node_modules/

no changes added to commit (use "git add" and/or "git commit -a")

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git diff
diff --git a/.bitmap b/.bitmap
index da2fadf..980291e 100644
--- a/.bitmap
+++ b/.bitmap
@@ -1,5 +1,29 @@
 /* THIS IS A BIT-AUTO-GENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */

 {
+    "kotsuha.test-bit/bar@0.9.6": {
+        "files": [
+            {
+                "relativePath": "lib/bar.js",
+                "test": false,
diff --git a/.bitmap b/.bitmap
index da2fadf..980291e 100644
+                "name": "bar.js"
+            }
+        ],
+        "mainFile": "lib/bar.js",
+        "origin": "AUTHORED",
+        "exported": true
+    },
+    "kotsuha.test-bit/foo@0.9.6": {
+        "files": [
+            {
+                "relativePath": "lib/foo.js",
+                "test": false,
+                "name": "foo.js"
+            }
+        ],
+        "mainFile": "lib/foo.js",
+        "origin": "AUTHORED",
+        "exported": true
+    },
     "version": "14.7.1"
 }
\ No newline at end of file
(END)^C
D:\test-bit (master -> origin) (test-bit@1.0.0)

git: 'co' is not a git command. See 'git --help'.

The most similar commands are
        commit
        clone
        log
:
D:\test-bit (master -> origin) (test-bit@1.0.0)
λ dir
 磁碟區 D 中的磁碟是 Data
 磁碟區序號:  5EF9-42B0

 D:\test-bit 的目錄

2020/01/08  上午 01:58    <DIR>          .
2020/01/08  上午 01:58    <DIR>          ..
2020/01/08  上午 01:58               701 .bitmap
2020/01/08  上午 12:33               109 index.js
2020/01/08  上午 12:28    <DIR>          lib
2020/01/08  上午 01:58    <DIR>          node_modules
2020/01/08  上午 01:40               577 package.json
2020/01/07  下午 09:28                22 README.md
               4 個檔案           1,409 位元組
               4 個目錄  301,926,944,768 位元組可用

D:\test-bit (master -> origin) (test-bit@1.0.0)

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git commit -m "Update bitmap"
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
        modified:   .bitmap

Untracked files:
        node_modules/

no changes added to commit

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git add --all

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git acommit -m "Update bitmap"
[master 5261e37] Update bitmap
 5 files changed, 50 insertions(+)
 create mode 100644 node_modules/@bit/kotsuha.test-bit.bar/lib/bar.js
 create mode 100644 node_modules/@bit/kotsuha.test-bit.bar/package.json
 create mode 100644 node_modules/@bit/kotsuha.test-bit.foo/lib/foo.js
 create mode 100644 node_modules/@bit/kotsuha.test-bit.foo/package.json

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git log --oneline
5261e37 (HEAD -> master) Update bitmap
aa59fdf initialized an emtpy bit workspace
e78cb4d Make a simple node project
795f1e4 (origin/master, origin/HEAD) Initial commit

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git reset HEAD^
More? n
fatal: ambiguous argument 'HEADn': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git rlog --oneline
5261e37 (HEAD -> master) Update bitmap
aa59fdf initialized an emtpy bit workspace
e78cb4d Make a simple node project
795f1e4 (origin/master, origin/HEAD) Initial commit

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git lreset "HEAD^"
Unstaged changes after reset:
M       .bitmap

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git rlog --oneline
aa59fdf (HEAD -> master) initialized an emtpy bit workspace
e78cb4d Make a simple node project
795f1e4 (origin/master, origin/HEAD) Initial commit

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .bitmap

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        node_modules/

no changes added to commit (use "git add" and/or "git commit -a")

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ touch .gitignore

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ vim .gitignore
```

```
node_modules


```

```cmd

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   .bitmap

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore

no changes added to commit (use "git add" and/or "git commit -a")

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git add .bitmap

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git add .gitignore

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git commit -m "Update bitmap"
[master ae334bd] Update bitmap
 2 files changed, 26 insertions(+)
 create mode 100644 .gitignore

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ git push origin master
Counting objects: 15, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (14/14), done.
Writing objects: 100% (15/15), 1.78 KiB | 260.00 KiB/s, done.
Total 15 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), done.
To https://github.com/Kotsuha/test-bit.git
   795f1e4..ae334bd  master -> master

D:\test-bit (master -> origin) (test-bit@1.0.0)
λ
```

![](README/bit-components.png)
