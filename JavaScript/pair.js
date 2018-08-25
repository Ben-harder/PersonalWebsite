/* 
 * Class for a pair object. Has a first and second value.
 */
class Pair
{
    constructor(first, second)
    {
        this.first = first;
        this.second = second;
    }

    set(first, second)
    {
        this.first = first;
        this.second = second;
    }

    equals(other)
    {
        return this.first == other.first && this.second == other.second;
    }
}