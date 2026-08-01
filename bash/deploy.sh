#!/bin/bash

#export LANG=en_US.UTF-8 # macOS 默认是 UTF-8，不需要额外设置

pnpm run build

echo "开始发布..."

# COPYFILE_DISABLE=1 避免打包出 `._` 文件
# --no-xattrs 避免把 macOS 的 com.apple.provenance 扩展属性打包进去，
# 否则 Linux 服务器解压时会打印大量 `Ignoring unknown extended header keyword` 警告
COPYFILE_DISABLE=1 tar --no-xattrs -cvf dist.tar -C ../ dist
echo "打包成功"

scp dist.tar c-jz:/juzi/blog/
echo "上传 dist.tar 到服务器成功"

ssh c-jz "rm -rf /juzi/blog/dist && tar -xvf /juzi/blog/dist.tar -C /juzi/blog && rm -f /juzi/blog/dist.tar"
echo "发布成功"

rm -f dist.tar
rm -rf ../dist
echo 删除本地 dist.tar, dist 成功