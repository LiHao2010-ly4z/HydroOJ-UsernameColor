import { Context, SettingModel } from 'hydrooj';

const HEX_COLOR_REGEX = /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/;

export function apply(ctx: Context) {
    ctx.inject(['setting'], (c) => {
        c.setting.AccountSetting(
            SettingModel.Setting(
                'setting_info',
                'customNameColor',
                '',
                'text',
                'customNameColor',
                'customNameColor.desc',
                SettingModel.FLAG_PRIVATE,
                (val: string) => !val || HEX_COLOR_REGEX.test(val),
            ),
        );
    });
}
