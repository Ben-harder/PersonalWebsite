/* 
 * Block class. Contains data to draw a rectangle.
 */
class Block
{
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /*
     * Set the position of the block given an x and y coordinate.
     */
    setPos(x, y)
    {
        this.x = x;
        this.y = y;
    }

    /*
     * Check if the position of two blocks are equal based
     * on their position.
     */
    isEqual(otherBlock)
    {
        return this.x == otherBlock.x && this.y == otherBlock.y;
    }
}