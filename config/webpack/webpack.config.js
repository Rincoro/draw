// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const { generateWebpackConfig } = require('shakapacker');
const { merge } = require('webpack-merge');

const baseConfig = generateWebpackConfig(); // 基本の設定を取得

const customConfig = {
  // ここにカスタム設定を書く
};

const webpackConfig = merge(baseConfig, customConfig); // 基本設定とカスタム設定をマージ

module.exports = webpackConfig; // マージした設定をエクスポート


