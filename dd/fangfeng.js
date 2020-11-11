function onBridgeReady() {
    WeixinJSBridge.call('hideOptionMenu');
}
if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
} else {
    onBridgeReady();
}

function onChangeTitle() {
    content = new Array(110);
    content[0] = '\u751f\u6d3b\u662f\u4e0d\u516c\u5e73\u7684\uff0c\u4f60\u8981\u53bb\u9002\u5e94\u5b83\u3002';
    content[1] = '\u9001\u4eba\u73ab\u7470\uff0c\u624b\u6d41\u4f59\u9999\u3002';
    content[2] = '\u6211\u4eec\u6709\u4e0d\u540c\u7684\u7c4d\u8d2f\u3001\u4e0d\u540c\u7684\u5e74\u9f84\u3001\u4e0d\u540c\u7684\u4e60\u60ef\u3001\u4e0d\u540c\u7684\u7ecf\u5386\uff0c\u4f46\u6709\u4e00\u70b9\u6211\u4eec\u662f\u76f8\u540c\u7684\uff0c\u90a3\u5c31\u662f\u90fd\u6709\u4e00\u9897\uff1a\u7231\u5fc3\u3002';
    content[3] = '\u9526\u4e0a\u6dfb\u82b1\u56fa\u7136\u597d,\u96ea\u4e2d\u9001\u70ad\u66f4\u53ef\u8d35\u3002';
    content[4] = '\u4f38\u51fa\u60a8\u7684\u53cb\u7231\u4e4b\u624b,\u8ba9\u66f4\u591a\u7684\u5b69\u5b50\u91cd\u8fd4\u6821\u56ed\u3002';
    content[5] = '\u5982\u679c\u4f60\u9677\u5165\u56f0\u5883\uff0c\u90a3\u4e0d\u662f\u4f60\u7236\u6bcd\u7684\u8fc7\u9519\uff0c\u4e0d\u8981\u5c06\u4f60\u7406\u5e94\u627f\u62c5\u7684\u8d23\u4efb\u8f6c\u5ac1\u7ed9\u4ed6\u4eba\uff0c\u800c\u8981\u5b66\u7740\u4ece\u4e2d\u5438\u53d6\u6559\u8bad\u3002';
    content[6] = '\u7231\u5fc3\u4e00\u7247,\u771f\u60c5\u6c38\u8fdc\u3002';
    content[7] = '\u8046\u542c\u5fc3\u58f0,\u5b9e\u73b0\u613f\u671b\u3002';
    content[8] = '\u8d70\u51fa\u5b66\u6821\u540e\u7684\u751f\u6d3b\u4e0d\u50cf\u5728\u5b66\u6821\u4e00\u6837\u6709\u5b66\u671f\u4e4b\u5206\uff0c\u4e5f\u6ca1\u6709\u6691\u5047\u4e4b\u8bf4\u3002\u6ca1\u6709\u51e0\u4f4d\u8001\u677f\u4e50\u4e8e\u5e2e\u4f60\u53d1\u73b0\u81ea\u6211\uff0c\u4f60\u5fc5\u987b\u4f9d\u9760\u81ea\u5df1\u53bb\u5b8c\u6210\u3002';
    content[9] = '\u7535\u89c6\u4e2d\u7684\u8bb8\u591a\u573a\u666f\u51b3\u4e0d\u662f\u771f\u5b9e\u7684\u751f\u6d3b\u3002\u5728\u73b0\u5b9e\u751f\u6d3b\u4e2d\uff0c\u4eba\u4eec\u5fc5\u987b\u57cb\u5934\u505a\u81ea\u5df1\u7684\u5de5\u4f5c\uff0c\u800c\u975e\u50cf\u7535\u89c6\u91cc\u6f14\u7684\u90a3\u6837\u5929\u5929\u6ce1\u5728\u5496\u5561\u9986\u91cc\u3002';
    content[10] = '\u5584\u5f85\u4f60\u6240\u538c\u6076\u7684\u4eba\uff0c\u56e0\u4e3a\u8bf4\u4e0d\u5b9a\u54ea\u4e00\u5929\u4f60\u5c31\u4f1a\u4e3a\u8fd9\u6837\u7684\u4e00\u4e2a\u4eba\u5de5\u4f5c\u3002';
    content[11] = '\u4eba\u751f\u5e94\u8be5\u5982\u8721\u70db\u4e00\u6837\uff0c\u4ece\u9876\u71c3\u5230\u5e95\uff0c\u4e00\u76f4\u90fd\u662f\u5149\u660e\u7684\u3002 \u2015\u2015 \u8427\u695a\u5973';
    content[12] = '\u4eba\u751f\u7684\u4ef7\u503c\uff0c\u5373\u4ee5\u5176\u4eba\u5bf9\u4e8e\u5f53\u4ee3\u6240\u505a\u7684\u5de5\u4f5c\u4e3a\u5c3a\u5ea6\u3002 \u2015\u2015 \u5f90\u73ae';
    content[13] = '\u8def\u662f\u811a\u8e0f\u51fa\u6765\u7684\uff0c\u5386\u53f2\u662f\u4eba\u5199\u51fa\u6765\u7684\u3002\u4eba\u7684\u6bcf\u4e00\u6b65\u884c\u52a8\u90fd\u5728\u4e66\u5199\u81ea\u5df1\u7684\u5386\u53f2\u3002 \u2015\u2015 \u5409\u9e3f\u660c';
    content[14] = '\u6625\u8695\u5230\u6b7b\u4e1d\u65b9\u5c3d\uff0c\u4eba\u81f3\u671f\u9890\u4ea6\u4e0d\u4f11\u3002\u4e00\u606f\u5c1a\u5b58\u987b\u52aa\u529b\uff0c\u7559\u4f5c\u9752\u5e74\u597d\u8303\u7574\u3002 \u2015\u2015 \u5434\u7389\u7ae0';
    content[15] = '\u4f46\u613f\u6bcf\u6b21\u56de\u5fc6\uff0c\u5bf9\u751f\u6d3b\u90fd\u4e0d\u611f\u5230\u8d1f\u759a \u2015\u2015 \u90ed\u5c0f\u5ddd';
    content[16] = '\u4eba\u7684\u4e00\u751f\u53ef\u80fd\u71c3\u70e7\u4e5f\u53ef\u80fd\u8150\u673d\uff0c\u6211\u4e0d\u80fd\u8150\u673d\uff0c\u6211\u613f\u610f\u71c3\u70e7\u8d77\u6765\uff01 \u2015\u2015 \u5965\u65af\u7279\u6d1b\u592b\u65af\u57fa';
    content[17] = '\u4f60\u82e5\u8981\u559c\u7231\u4f60\u81ea\u5df1\u7684\u4ef7\u503c\uff0c\u4f60\u5c31\u5f97\u7ed9\u4e16\u754c\u521b\u9020\u4ef7\u503c\u3002 \u2015\u2015 \u6b4c\u5fb7';
    content[18] = '\u793e\u4f1a\u72b9\u5982\u4e00\u6761\u8239\uff0c\u6bcf\u4e2a\u4eba\u90fd\u8981\u6709\u638c\u8235\u7684\u51c6\u5907\u3002 \u2015\u2015 \u6613\u535c\u751f';
    content[19] = '\u4eba\u751f\u4e0d\u662f\u4e00\u79cd\u4eab\u4e50\uff0c\u800c\u662f\u4e00\u6869\u5341\u5206\u6c89\u91cd\u7684\u5de5\u4f5c\u3002 \u2015\u2015 \u5217\u592b\u30fb\u6258\u5c14\u65af\u6cf0';
    content[20] = '\u4eba\u751f\u7684\u4ef7\u503c\uff0c\u5e76\u4e0d\u662f\u7528\u65f6\u95f4\uff0c\u800c\u662f\u7528\u6df1\u5ea6\u53bb\u8861\u91cf\u7684\u3002 \u2015\u2015 \u5217\u592b\u30fb\u6258\u5c14\u65af\u6cf0';
    content[21] = '\u751f\u6d3b\u53ea\u6709\u5728\u5e73\u6de1\u65e0\u5473\u7684\u4eba\u770b\u6765\u624d\u662f\u7a7a\u865a\u800c\u5e73\u6de1\u65e0\u5473\u7684\u3002 \u2015\u2015 \u8f66\u5c14\u5c3c\u96ea\u592b\u65af\u57fa';
    content[22] = '\u4e00\u4e2a\u4eba\u7684\u4ef7\u503c\uff0c\u5e94\u8be5\u770b\u4ed6\u8d21\u732e\u4ec0\u4e48\uff0c\u800c\u4e0d\u5e94\u5f53\u770b\u4ed6\u53d6\u5f97\u4ec0\u4e48\u3002 \u2015\u2015 \u7231\u56e0\u65af\u5766';
    content[23] = '\u4eba\u53ea\u6709\u732e\u8eab\u4e8e\u793e\u4f1a\uff0c\u624d\u80fd\u627e\u51fa\u90a3\u77ed\u6682\u800c\u6709\u98ce\u9669\u7684\u751f\u547d\u7684\u610f\u4e49\u3002 \u2015\u2015 \u7231\u56e0\u65af\u5766';
    content[24] = '\u82b8\u82b8\u4f17\u751f\uff0c\u5b70\u4e0d\u7231\u751f\uff1f\u7231\u751f\u4e4b\u6781\uff0c\u8fdb\u800c\u7231\u7fa4\u3002 \u2015\u2015 \u79cb\u747e';
    content[25] = '\u751f\u6d3b\u771f\u8c61\u8fd9\u676f\u6d53\u9152\uff0c\u4e0d\u7ecf\u4e09\u756a\u4e94\u6b21\u7684\u63d0\u70bc\u5475\uff0c\u5c31\u4e0d\u4f1a\u8fd9\u6837\u53ef\u53e3\uff01 \u2015\u2015 \u90ed\u5c0f\u5ddd';
    content[26] = '\u5145\u6ee1\u7740\u6b22\u4e50\u4e0e\u6597\u4e89\u7cbe\u795e\u7684\u4eba\u4eec\uff0c\u6c38\u8fdc\u5e26\u7740\u6b22\u4e50\uff0c\u6b22\u8fce\u96f7\u9706\u4e0e\u9633\u5149\u3002 \u2015\u2015 \u8d6b\u80e5\u9ece';
    content[27] = '\u6625\u98ce\u5439\u67f3,\u96e8\u6da6\u5927\u5730\u3002';
    content[28] = '\u4e3a\u4e86\u751f\u6d3b\u4e2d\u52aa\u529b\u53d1\u6325\u81ea\u5df1\u7684\u4f5c\u7528\uff0c\u70ed\u7231\u4eba\u751f\u5427\u3002 \u2015\u2015 \u7f57\u4e39';
    content[29] = '\u5e0c\u671b\u662f\u9644\u4e3d\u4e8e\u5b58\u5728\u7684\uff0c\u6709\u5b58\u5728\uff0c\u4fbf\u6709\u5e0c\u671b\uff0c\u6709\u5e0c\u671b\uff0c\u4fbf\u662f\u5149\u660e\u3002 \u2015\u2015 \u9c81\u8fc5';
    content[30] = '\u6c89\u6c89\u7684\u9ed1\u591c\u90fd\u662f\u767d\u5929\u7684\u524d\u594f\u3002 \u2015\u2015 \u90ed\u5c0f\u5ddd';
    content[31] = '\u5f53\u4e00\u4e2a\u4eba\u7528\u5de5\u4f5c\u53bb\u8fce\u63a5\u5149\u660e\uff0c\u5149\u660e\u5f88\u5feb\u5c31\u4f1a\u6765\u7167\u8000\u7740\u4ed6\u3002 \u2015\u2015 \u51af\u5b66\u5cf0';
    content[32] = '\u4e1c\u5929\u5df2\u7ecf\u5230\u6765\uff0c\u6625\u5929\u8fd8\u4f1a\u8fdc\u5417\uff1f \u2015\u2015 \u96ea\u83b1';
    content[33] = '\u8fc7\u53bb\u5c5e\u4e8e\u6b7b\u795e\uff0c\u672a\u6765\u5c5e\u4e8e\u4f60\u81ea\u5df1\u3002 \u2015\u2015 \u96ea\u83b1';
    content[34] = '\u4e16\u95f4\u7684\u6d3b\u52a8\uff0c\u7f3a\u70b9\u867d\u591a\uff0c\u4f46\u4ecd\u662f\u7f8e\u597d\u7684\u3002 \u2015\u2015 \u7f57\u4e39';
    content[35] = '\u8f9b\u52e4\u7684\u871c\u8702\u6c38\u6ca1\u6709\u65f6\u95f4\u60b2\u54c0\u3002 \u2015\u2015 \u5e03\u83b1\u514b';
    content[36] = '\u5e0c\u671b\u662f\u5384\u8fd0\u7684\u5fe0\u5b9e\u7684\u59d0\u59b9\u3002 \u2015\u2015 \u666e\u5e0c\u91d1';
    content[37] = '\u5f53\u4f60\u7684\u5e0c\u671b\u4e00\u4e2a\u4e2a\u843d\u7a7a\uff0c\u4f60\u4e5f\u8981\u575a\u5b9a\uff0c\u8981\u6c89\u7740\uff01 \u2015\u2015 \u6717\u8d39\u7f57';
    content[38] = '\u5148\u76f8\u4fe1\u4f60\u81ea\u5df1\uff0c\u7136\u540e\u522b\u4eba\u624d\u4f1a\u76f8\u4fe1\u4f60\u3002 \u2015\u2015 \u5c60\u683c\u6d85\u592b';
    content[39] = '\u4e0d\u8981\u6168\u53f9\u751f\u6d3b\u5e95\u75db\u82e6\uff01---\u6168\u53f9\u662f\u5f31\u8005...... \u2015\u2015 \u9ad8\u5c14\u57fa';
    content[40] = '\u5bbf\u547d\u8bba\u662f\u90a3\u4e9b\u7f3a\u4e4f\u610f\u5fd7\u529b\u7684\u5f31\u8005\u7684\u501f\u53e3\u3002 \u2015\u2015 \u7f57\u66fc\u30fb\u7f57\u5170';
    content[41] = '\u6625\u56de\u4eba\u95f4,\u771f\u60c5\u5949\u732e\u3002';
    content[42] = '\u79c1\u5fc3\u80dc\u8005\uff0c\u53ef\u4ee5\u706d\u516c\u3002 \u2015\u2015 \u6797\u900b';
    content[43] = '\u4eba\u4eba\u597d\u516c\uff0c\u5219\u5929\u4e0b\u592a\u5e73\uff1b\u4eba\u4eba\u8425\u79c1\uff0c\u5219\u5929\u4e0b\u5927\u4e71\u3002 \u2015\u2015 \u5218\u9e57';
    content[44] = '\u81ea\u79c1\u81ea\u5229\u4e4b\u5fc3\uff0c\u662f\u7acb\u4eba\u8fbe\u4eba\u4e4b\u969c\u3002 \u2015\u2015 \u5415\u5764';
    content[45] = '\u5982\u70df\u5f80\u4e8b\u4ff1\u5fd8\u5374\uff0c\u5fc3\u5e95\u65e0\u79c1\u5929\u5730\u5bbd\u3002 \u2015\u2015 \u9676\u94f8';
    content[46] = '\u5e38\u6c42\u6709\u5229\u522b\u4eba\uff0c\u4e0d\u6c42\u6709\u5229\u81ea\u5df1\u3002 \u2015\u2015 \u8c22\u89c9\u54c9';
    content[47] = '\u4e00\u5207\u5229\u5df1\u7684\u751f\u6d3b\uff0c\u90fd\u662f\u975e\u7406\u6027\u7684\uff0c\u52a8\u7269\u7684\u751f\u6d3b\u3002 \u2015\u2015 \u5217\u592b\u30fb\u6258\u5c14\u65af\u6cf0';
    content[48] = '\u4eba\u7684\u7406\u6027\u7c89\u788e\u4e86\u8ff7\u4fe1\uff0c\u800c\u4eba\u7684\u611f\u60c5\u4e5f\u5c06\u6467\u6bc1\u5229\u5df1\u4e3b\u4e49\u3002 \u2015\u2015 \u6d77\u6d85';
    content[49] = '\u65e0\u79c1\u662f\u7a00\u6709\u7684\u9053\u5fb7\uff0c\u56e0\u4e3a\u4ece\u5b83\u8eab\u4e0a\u662f\u65e0\u5229\u53ef\u56fe\u7684\u3002 \u2015\u2015 \u5e03\u83b1\u5e0c\u7279';
    content[50] = '\u541b\u5b50\u55bb\u4e8e\u4e49\uff0c\u5c0f\u4eba\u55bb\u4e8e\u5229\u3002 \u2015\u2015 \u5b54\u4e18';
    content[51] = '\u4e0d\u621a\u621a\u4e8e\u8d2b\u8d31\uff0c\u4e0d\u6c72\u6c72\u4e8e\u5bcc\u8d35\u3002 \u2015\u2015 \u9676\u6e0a\u660e';
    content[52] = '\u5bcc\u8d35\u4e0d\u6deb\u8d2b\u8d31\u4e50\uff0c\u7537\u513f\u5230\u6b64\u662f\u8c6a\u96c4\u3002 \u2015\u2015 \u7a0b\u98a2';
    content[53] = '\u6e05\u8d2b\uff0c\u6d01\u767d\u6734\u7d20\u7684\u751f\u6d3b\uff0c\u6b63\u662f\u6211\u4eec\u9769\u547d\u8005\u80fd\u591f\u6218\u80dc\u8bb8\u591a\u56f0\u96be\u7684\u5730\u65b9\uff01 \u2015\u2015 \u65b9\u5fd7\u654f';
    content[54] = '\u4e09\u519b\u53ef\u593a\u5e05\u4e5f,\u5339\u592b\u4e0d\u53ef\u593a\u5fd7\u4e5f\u3002 \u2015\u2015 \u5b54\u4e18';
    content[55] = '\u5fd7\u4e0d\u5f3a\u8005\u667a\u4e0d\u8fbe\u3002 \u2015\u2015 \u58a8\u7fdf';
    content[56] = '\u71d5\u96c0\u5b89\u77e5\u9e3f\u9e44\u4e4b\u5fd7\u54c9\uff01 \u2015\u2015 \u9648\u6d89';
    content[57] = '\u5fd7\u5f53\u5b58\u9ad8\u8fdc\u3002 \u2015\u2015 \u8bf8\u845b\u4eae';
    content[58] = '\u8001\u9aa5\u4f0f\u67a5\uff0c\u5fd7\u5728\u5343\u91cc\uff1b\u70c8\u58eb\u66ae\u5e74\uff0c\u58ee\u5fc3\u4e0d\u5df2\u3002 \u2015\u2015 \u66f9\u64cd';
    content[59] = '\u71d5\u96c0\u620f\u85e9\u67f4\uff0c\u5b89\u8bc6\u9e3f\u9e44\u6e38\u3002 \u2015\u2015 \u66f9\u690d';
    content[60] = '\u7a77\u4e14\u76ca\u575a\uff0c\u4e0d\u5760\u9752\u4e91\u4e4b\u5fd7\u3002 \u2015\u2015 \u738b\u52c3';
    content[61] = '\u5927\u9e4f\u4e00\u65e5\u540c\u98ce\u8d77\uff0c\u6276\u6447\u76f4\u4e0a\u4e5d\u4e07\u91cc\u3002 \u2015\u2015 \u674e\u767d';
    content[62] = '\u53e4\u4e4b\u7acb\u5927\u4e8b\u8005\uff0c\u4e0d\u60df\u6709\u8d85\u4e16\u4e4b\u624d\uff0c\u4ea6\u5fc5\u6709\u575a\u5fcd\u4e0d\u62d4\u4e4b\u5fd7\u3002 \u2015\u2015 \u82cf\u8f7c';
    content[63] = '\u751f\u5f53\u4f5c\u4eba\u6770\uff0c\u6b7b\u4ea6\u4e3a\u9b3c\u96c4\uff0c\u81f3\u4eca\u601d\u9879\u7fbd\uff0c\u4e0d\u80af\u8fc7\u6c5f\u4e1c\u3002 \u2015\u2015 \u674e\u6e05\u7167';
    content[64] = '\u58ee\u5fc3\u672a\u4e0e\u5e74\u4ff1\u8001\uff0c\u6b7b\u53bb\u72b9\u80fd\u4f5c\u9b3c\u96c4\u3002 \u2015\u2015 \u9646\u6e38';
    content[65] = '\u6545\u7acb\u5fd7\u8005\uff0c\u4e3a\u5b66\u4e4b\u5fc3\u4e5f\uff1b\u4e3a\u5b66\u8005\uff0c\u7acb\u5fd7\u4e4b\u4e8b\u4e5f\u3002 \u2015\u2015 \u738b\u9633\u660e';
    content[66] = '\u8d2b\u4e0d\u8db3\u7f9e\uff0c\u53ef\u7f9e\u662f\u8d2b\u800c\u65e0\u5fd7\u3002 \u2015\u2015 \u5415\u5764';
    content[67] = '\u6211\u4eec\u4ee5\u4eba\u4eec\u7684\u76ee\u7684\u6765\u5224\u65ad\u4eba\u7684\u6d3b\u52a8\u3002\u76ee\u7684\u4f1f\u5927\uff0c\u6d3b\u52a8\u624d\u53ef\u4ee5\u8bf4\u662f\u4f1f\u5927\u7684\u3002 \u2015\u2015 \u5951\u8bc3\u592b';
    content[68] = '\u6beb\u65e0\u7406\u60f3\u800c\u53c8\u4f18\u67d4\u5be1\u65ad\u662f\u4e00\u79cd\u53ef\u60b2\u7684\u5fc3\u7406\u3002 \u2015\u2015 \u57f9\u6839';
    content[69] = '\u751f\u6d3b\u7684\u7406\u60f3\uff0c\u5c31\u662f\u4e3a\u4e86\u7406\u60f3\u7684\u751f\u6d3b\u3002 \u2015\u2015 \u5f20\u95fb\u5929';
    content[70] = '\u4eba\uff0c\u53ea\u8981\u6709\u4e00\u79cd\u4fe1\u5ff5\uff0c\u6709\u6240\u8ffd\u6c42\uff0c\u4ec0\u4e48\u8270\u82e6\u90fd\u80fd\u5fcd\u53d7\uff0c\u4ec0\u4e48\u73af\u5883\u4e5f\u90fd\u80fd\u9002\u5e94\u3002 \u2015\u2015 \u4e01\u73b2';
    content[71] = '\u7406\u60f3\u7684\u4eba\u7269\u4e0d\u4ec5\u8981\u5728\u7269\u8d28\u9700\u8981\u7684\u6ee1\u8db3\u4e0a\uff0c\u8fd8\u8981\u5728\u7cbe\u795e\u65e8\u8da3\u7684\u6ee1\u8db3\u4e0a\u5f97\u5230\u8868\u73b0\u3002 \u2015\u2015 \u9ed1\u683c\u5c14';
    content[72] = '\u4e00\u4e2a\u80fd\u601d\u60f3\u7684\u4eba\uff0c\u624d\u771f\u662f\u4e00\u4e2a\u529b\u91cf\u65e0\u8fb9\u7684\u4eba\u3002 \u2015\u2015 \u5df4\u5c14\u624e\u514b';
    content[73] = '\u4e00\u4e2a\u6ca1\u6709\u53d7\u5230\u732e\u8eab\u7684\u70ed\u60c5\u6240\u9f13\u821e\u7684\u4eba\uff0c\u6c38\u8fdc\u4e0d\u4f1a\u505a\u51fa\u4ec0\u4e48\u4f1f\u5927\u7684\u4e8b\u60c5\u6765\u3002 \u2015\u2015 \u8f66\u5c14\u5c3c\u96ea\u592b\u65af\u57fa';
    content[74] = '\u5171\u540c\u7684\u4e8b\u4e1a\uff0c\u5171\u540c\u7684\u6597\u4e89\uff0c\u53ef\u4ee5\u4f7f\u4eba\u4eec\u4ea7\u751f\u5fcd\u53d7\u4e00\u5207\u7684\u529b\u91cf\u3002 \u2015\u2015 \u5965\u65af\u7279\u6d1b\u592b\u65af\u57fa';
    content[75] = '\u6211\u4ece\u6765\u4e0d\u628a\u5b89\u9038\u548c\u5feb\u4e50\u770b\u4f5c\u662f\u751f\u6d3b\u76ee\u7684\u672c\u8eab---\u8fd9\u79cd\u4f26\u7406\u57fa\u7840\uff0c\u6211\u53eb\u5b83\u732a\u680f\u7684\u7406\u60f3\u3002 \u2015\u2015 \u7231\u56e0\u65af\u5766';
    content[76] = '\u5728\u4e00\u4e2a\u4eba\u6c11\u7684\u56fd\u5bb6\u4e2d\u8fd8\u8981\u6709\u4e00\u79cd\u63a8\u52a8\u7684\u67a2\u7ebd\uff0c\u8fd9\u5c31\u662f\u7f8e\u5fb7\u3002 \u2015\u2015 \u5b5f\u5fb7\u65af\u9e20';
    content[77] = '\u4eba\u4e0d\u80fd\u8c61\u8d70\u517d\u90a3\u6837\u6d3b\u7740\uff0c\u5e94\u8be5\u8ffd\u6c42\u77e5\u8bc6\u548c\u7f8e\u5fb7\u3002 \u2015\u2015 \u4f46\u4e01';
    content[78] = '\u52ff\u4ee5\u6076\u5c0f\u800c\u4e3a\u4e4b\uff0c\u52ff\u4ee5\u5584\u5c0f\u800c\u4e0d\u4e3a\u3002\u60df\u8d24\u60df\u5fb7\uff0c\u80fd\u670d\u4e8e\u4eba\u3002 \u2015\u2015 \u5218\u5907';
    content[79] = '\u4e0d\u60a3\u4f4d\u4e4b\u4e0d\u5c0a\uff0c\u800c\u60a3\u5fb7\u4e4b\u4e0d\u5d07\uff1b\u4e0d\u803b\u7984\u4e4b\u4e0d\u4f19\uff0c\u800c\u803b\u667a\u4e4b\u4e0d\u535a\u3002 \u2015\u2015 \u5f20\u8861';
    content[80] = '\u571f\u6276\u53ef\u57ce\u5899\uff0c\u79ef\u5fb7\u4e3a\u539a\u5730\u3002 \u2015\u2015 \u674e\u767d';
    content[81] = '\u884c\u4e00\u4ef6\u597d\u4e8b\uff0c\u5fc3\u4e2d\u6cf0\u7136\uff1b\u884c\u4e00\u4ef6\u6b79\u4e8b\uff0c\u887e\u5f71\u62b1\u6127\u3002 \u2015\u2015 \u795e\u6db5\u5149';
    content[82] = '\u5165\u4e8e\u6c61\u6ce5\u800c\u4e0d\u67d3\u3001\u4e0d\u53d7\u8d44\u4ea7\u9636\u7ea7\u7cd6\u8863\u70ae\u5f39\u7684\u4fb5\u8680\uff0c\u662f\u6700\u96be\u80fd\u53ef\u8d35\u7684\u9769\u547d\u54c1\u8d28\u3002\u2015\u2015 \u5468\u6069\u6765';
    content[83] = '\u4e00\u4e2a\u4eba\u6700\u4f24\u5fc3\u7684\u4e8b\u60c5\u65e0\u8fc7\u4e8e\u826f\u5fc3\u7684\u6b7b\u706d\u3002 \u2015\u2015 \u90ed\u6cab\u82e5';
    content[84] = '\u5bb3\u7f9e\u662f\u754f\u60e7\u6216\u5bb3\u6015\u7f9e\u8fb1\u7684\u60c5\u7eea\uff0c\u8fd9\u79cd\u60c5\u7eea\u53ef\u4ee5\u963b\u6b62\u4eba\u4e0d\u53bb\u72af\u67d0\u4e9b\u5351\u9119\u7684\u884c\u4e3a\u3002 \u2015\u2015 \u65af\u5bbe\u8bfa\u838e';
    content[85] = '\u5e94\u8be5\u70ed\u5fc3\u5730\u81f4\u529b\u4e8e\u7167\u9053\u5fb7\u884c\u4e8b\uff0c\u800c\u4e0d\u8981\u7a7a\u8c08\u9053\u5fb7\u3002 \u2015\u2015 \u5fb7\u8c1f\u514b\u5229\u7279';
    content[86] = '\u611f\u60c5\u6709\u7740\u6781\u5927\u7684\u9f13\u821e\u529b\u91cf\uff0c\u56e0\u6b64\uff0c\u5b83\u662f\u4e00\u5207\u9053\u5fb7\u884c\u4e3a\u7684\u91cd\u8981\u524d\u63d0\u3002 \u2015\u2015 \u51ef\u6d1b\u592b';
    content[87] = '\u6ca1\u6709\u4f1f\u5927\u7684\u54c1\u683c\uff0c\u5c31\u6ca1\u6709\u4f1f\u5927\u7684\u4eba\uff0c\u751a\u81f3\u4e5f\u6ca1\u6709\u4f1f\u5927\u7684\u827a\u672f\u5bb6\uff0c\u4f1f\u5927\u7684\u884c\u52a8\u8005\u3002 \u2015\u2015 \u7f57\u66fc\u30fb\u7f57\u5170';
    content[88] = '\u7406\u667a\u8981\u6bd4\u5fc3\u7075\u4e3a\u9ad8\uff0c\u601d\u60f3\u8981\u6bd4\u611f\u60c5\u53ef\u9760\u3002 \u2015\u2015 \u9ad8\u5c14\u57fa';
    content[89] = '\u9876\u7ea7\u57f9\u8bad\u7f51 \u8ba9\u6211\u4eec\u643a\u624b\u4e00\u8d77\u6210\u957f ';
    content[90] = '\u4eba\u7c7b\u88ab\u8d4b\u4e88\u4e86\u4e00\u79cd\u5de5\u4f5c\uff0c\u90a3\u5c31\u662f\u7cbe\u795e\u7684\u6210\u957f\u3002 \u2015\u2015 \u5217\u592b\u30fb\u6258\u5c14\u65af\u6cf0';
    content[91] = '\u4eba\u5728\u667a\u6167\u4e0a\u5e94\u5f53\u662f\u660e\u8c41\u7684\uff0c\u9053\u5fb7\u4e0a\u5e94\u8be5\u662f\u6e05\u767d\u7684\uff0c\u8eab\u4f53\u4e0a\u5e94\u8be5\u662f\u6e05\u6d01\u7684\u3002 \u2015\u2015 \u5951\u8bc3\u592b';
    content[92] = '\u826f\u5fc3\u662f\u7531\u4eba\u7684\u77e5\u8bc6\u548c\u5168\u90e8\u751f\u6d3b\u65b9\u5f0f\u6765\u51b3\u5b9a\u7684\u3002 \u2015\u2015 \u9a6c\u514b\u601d';
    content[93] = '\u4e0d\u5ff5\u5c45\u5b89\u601d\u5371\uff0c\u6212\u5962\u4ee5\u4fed\uff1b\u65af\u4ee5\u4f10\u6839\u800c\u6c42\u6728\u8302\uff0c\u585e\u6e90\u800c\u6b32\u6d41\u957f\u4e5f\u3002 \u2015\u2015 \u9b4f\u5fb5';
    content[94] = '\u5386\u89c8\u524d\u8d24\u56fd\u4e0e\u5bb6\uff0c\u6210\u7531\u52e4\u4fed\u7834\u7531\u5962\u3002 \u2015\u2015 \u674e\u5546\u9690';
    content[95] = '\u628a&ldquo;\u5fb7\u6027&rdquo;\u6559\u7ed9\u4f60\u4eec\u7684\u5b69\u5b50\uff1a\u4f7f\u4eba\u5e78\u798f\u7684\u662f\u5fb7\u6027\u800c\u975e\u91d1\u94b1\u3002\u8fd9\u662f\u6211\u7684\u7ecf\u9a8c\u4e4b\u8c08\u3002\u5728\u60a3\u96be\u4e2d\u652f\u6301\u6211\u7684\u662f\u9053\u5fb7\uff0c\u4f7f\u6211\u4e0d\u66fe\u81ea\u6740\u7684\uff0c\u9664\u4e86\u827a\u672f\u4ee5\u5916\u4e5f\u662f\u9053\u5fb7\u3002 \u2015\u2015 \u8d1d\u591a\u82ac';
    content[96] = '\u5982\u679c\u9053\u5fb7\u8d25\u574f\u4e86\uff0c\u8da3\u5473\u4e5f\u5fc5\u7136\u4f1a\u5815\u843d\u3002\u2015\u2015\u72c4\u5fb7\u7f57';
    content[97] = '\u6211\u613f\u8bc1\u660e\uff0c\u51e1\u662f\u884c\u4e3a\u5584\u826f\u4e0e\u9ad8\u5c1a\u7684\u4eba\uff0c\u5b9a\u80fd\u56e0\u4e4b\u800c\u62c5\u5f53\u60a3\u96be\u3002 \u2015\u2015 \u8d1d\u591a\u82ac';
    content[98] = '\u88c5\u9970\u5bf9\u4e8e\u5fb7\u884c\u4e5f\u540c\u6837\u662f\u683c\u683c\u4e0d\u5165\u7684\uff0c\u56e0\u4e3a\u5fb7\u884c\u662f\u7075\u9b42\u7684\u529b\u91cf\u548c\u751f\u6c14\u3002 \u2015\u2015 \u5362\u68ad';
    content[99] = '\u6211\u6df1\u4fe1\u53ea\u6709\u6709\u9053\u5fb7\u7684\u516c\u6c11\u624d\u80fd\u5411\u81ea\u5df1\u7684\u7956\u56fd\u81f4\u4ee5\u53ef\u88ab\u63a5\u53d7\u7684\u656c\u793c\u3002 \u2015\u2015 \u5362\u68ad';
    content[100] = '\u5b66\u4f1a\u5077\u61d2\uff0c\u5e76\u61d2\u51fa\u5883\u754c\u662f\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u6700\u6709\u6548\u7684\u65b9\u6cd5\uff01';
    content[101] = '\u5bf9\u4e8e\u4e8b\u5b9e\u95ee\u9898\u7684\u5065\u5168\u7684\u5224\u65ad\u662f\u4e00\u5207\u5fb7\u884c\u7684\u771f\u6b63\u57fa\u7840\u3002 \u2015\u2015 \u5938\u7f8e\u7ebd\u65af';
    content[102] = '\u5fb7\u884c\u7684\u5b9e\u73b0\u662f\u7531\u884c\u4e3a\uff0c\u4e0d\u662f\u7531\u6587\u5b57\u3002 \u2015\u2015 \u5938\u7f8e\u7ebd\u65af';
    content[103] = '\u9738\u7956\u5b64\u8eab\u53d6\u4e8c\u6c5f\uff0c\u5b50\u5b59\u591a\u4ee5\u767e\u57ce\u964d\u3002\u8c6a\u534e\u5c3d\u51fa\u6210\u529f\u540e\uff0c\u9038\u4e50\u5b89\u77e5\u4e0e\u7978\u53cc\uff1f \u2015\u2015 \u738b\u5b89\u77f3';
    content[104] = '\u9634\u8c0b\u9677\u5bb3\u522b\u4eba\u7684\u4eba\uff0c\u81ea\u5df1\u4f1a\u9996\u5148\u906d\u5230\u4e0d\u5e78\u3002 \u2015\u2015 \u4f0a\u7d22';
    content[105] = '\u5962\u5219\u5984\u53d6\u82df\u53d6\uff0c\u5fd7\u6c14\u5351\u8fb1\uff1b\u4e00\u4ece\u4fed\u7ea6\uff0c\u5219\u4e8e\u4eba\u65e0\u6c42\uff0c\u4e8e\u5df1\u65e0\u6127\uff0c\u662f\u53ef\u4ee5\u517b\u6c14\u4e5f\u3002 \u2015\u2015 \u7f57\u5927\u7ecf';
    content[106] = '\u4f88\u5219\u591a\u6b32\u3002\u541b\u5b50\u591a\u6b32\u5219\u5ff5\u6155\u5bcc\u8d35\uff0c\u6789\u9053\u901f\u7978\u3002 \u2015\u2015 \u53f8\u9a6c\u5149';
    content[107] = '\u9876\u7ea7\u57f9\u8bad\u7f51 \u8ba9\u6211\u4eec\u643a\u624b\u4e00\u8d77\u6210\u957f ';
    content[108] = '\u77e5\u803b\u8fd1\u4e4e\u52c7\u3002 \u2015\u2015 \u5b54\u4e18';
    content[109] = '\u8fb1\uff0c\u83ab\u5927\u4e8e\u4e0d\u77e5\u803b\u3002 \u2015\u2015 \u738b\u901a';
    content[110] = '\u541b\u5b50\u5fe7\u9053\u4e0d\u5fe7\u8d2b\u3002 \u2015\u2015 \u5b54\u4e18';
    index = Math.floor(Math.random() * content.length);
    document.title += content[index];
}
onChangeTitle();