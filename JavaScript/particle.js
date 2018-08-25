/* 
 * Class for particles. Each particle has a x and y velocity and acceleration
 * as well as a mass.
 */
class Particle
{
    constructor(mass, x, y)
    {
        this.mass = mass;
        this.V = new Pair(0, 0);
        this.A = new Pair(0, 0);
        this.pos = new Pair(x, y);
    }

    setVelocity(xV, yV)
    {
        this.V.set(xV, yV);
    }

    setAcceleration(xA, yA)
    {
        this.A.set(xA, yA);
    }

    update()
    {
        this.pos.first += this.V.first;
        this.pos.second += this.V.second;

        this.V.first += this.A.first;
        this.V.second += this.A.second;
    }

    equals(other)
    {
        return (this.V.equals(other.V) &&
            this.A.equals(other.A) &&
            this.pos.equals(other.pos) &&
            this.mass == other.mass);
    }

    // Merge two particles accounting for the conservation of momentum.
    merge(other)
    {
        // Momentum is conserved: m1v1 + m2v2 = (m1+m2)vf
        var Vfx = (this.mass * this.V.first + other.mass * other.V.first) / (this.mass + other.mass);
        var Vfy = (this.mass * this.V.second + other.mass * other.V.second) / (this.mass + other.mass);
        this.V.first = Vfx;
        this.V.second = Vfy;
        this.A.first = this.A.first + other.A.first;
        this.A.second = this.A.second + other.A.second;
        this.mass = this.mass + other.mass;
    }
}