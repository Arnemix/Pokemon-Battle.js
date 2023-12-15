class Attack {
    constructor(name, damage, uses) {
        this.name = name;
        this.damage = damage;
        this.uses = uses;
    }

    getDamage() {
        return this.damage;
    }
    getName() {
        return this.name;
    }
    getUses() {
        return this.uses;
    }
    setUses(uses) {
        this.uses = uses;
    }
}


export default Attack;
