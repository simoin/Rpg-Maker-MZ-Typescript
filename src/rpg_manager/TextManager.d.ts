
declare class TextManager {

    public static basic(basicId: number): string;
    public static param(paramId: number): string;
    public static command(commandId: number): string;
    public static message(messageId: number): string;
    public static getter(method: Function, param: any[]): Function;

    public static get currencyUnit(): number;

    public static get level(): string;
    public static get levelA(): string;
    public static get hp(): string;
    public static get hpA(): string;
    public static get mp(): string;
    public static get mpA(): string;
    public static get tp(): string;
    public static get tpA(): string;
    public static get exp(): string;
    public static get expA(): string;
    public static get fight(): string;
    public static get escape(): string;
    public static get attack(): string;
    public static get guard(): string;
    public static get item(): string;
    public static get skill(): string;
    public static get equip(): string;
    public static get status(): string;
    public static get formation(): string;
    public static get save(): string;
    public static get gameEnd(): string;
    public static get options(): string;
    public static get weapon(): string;
    public static get armor(): string;
    public static get keyItem(): string;
    public static get equip2(): string;
    public static get optimize(): string;
    public static get clear(): string;
    public static get newGame(): string;
    public static get continue_(): string;
    public static get toTitle(): string;
    public static get cancel(): string;
    public static get buy(): string;
    public static get sell(): string;
    public static get alwaysDash(): string;
    public static get commandRemember(): string;
    public static get touchUI(): string;
    public static get bgmVolume(): string;
    public static get bgsVolume(): string;
    public static get meVolume(): string;
    public static get seVolume(): string;
    public static get possession(): string;
    public static get expTotal(): string;
    public static get expNext(): string;
    public static get saveMessage(): string;
    public static get loadMessage(): string;
    public static get file(): string;
    public static get autosave(): string;
    public static get partyName(): string;
    public static get emerge(): string;
    public static get preemptive(): string;
    public static get surprise(): string;
    public static get escapeStart(): string;
    public static get escapeFailure(): string;
    public static get victory(): string;
    public static get defeat(): string;
    public static get obtainExp(): string;
    public static get obtainGold(): string;
    public static get obtainItem(): string;
    public static get levelUp(): string;
    public static get obtainSkill(): string;
    public static get useItem(): string;
    public static get criticalToEnemy(): string;
    public static get criticalToActor(): string;
    public static get actorDamage(): string;
    public static get actorRecovery(): string;
    public static get actorGain(): string;
    public static get actorLoss(): string;
    public static get actorDrain(): string;
    public static get actorNoDamage(): string;
    public static get actorNoHit(): string;
    public static get enemyDamage(): string;
    public static get enemyRecovery(): string;
    public static get enemyGain(): string;
    public static get enemyLoss(): string;
    public static get enemyDrain(): string;
    public static get enemyNoDamage(): string;
    public static get enemyNoHit(): string;
    public static get evasion(): string;
    public static get magicEvasion(): string;
    public static get magicReflection(): string;
    public static get counterAttack(): string;
    public static get substitute(): string;
    public static get buffAdd(): string;
    public static get debuffAdd(): string;
    public static get buffRemove(): string;
    public static get actionFailure(): string;

}

export { TextManager }