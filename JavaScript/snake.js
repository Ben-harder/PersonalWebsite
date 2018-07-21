// Snake class
class Snake
{
    // Default constructor which builds a snake of length 1;
    constructor(size, grid)
    {
        this.length = 1;
        this.width = size;
        this.height = size;
        this.body = [];
        this.direction = '0';

        this.body.push(new Block(2, 2, this.width, this.height));
        this.head = this.body[0];
    }

    /*
     * Add another block to the snake.
     */
    push(x, y)
    {
        this.length++;
        // Where to put the new block will depend on where the current block just was
        this.body.push(new Block(x, y, this.width, this.height));
    }
    /* 
     * Draw the snake.
     */
    draw()
    {
        // TODO: add changing color to snake.

        // Have a function that will update the position of the snakes
        // body blocks based on where each block was previously.
        this.move(this.direction);
        ctx.fillStyle = "#000000";
        for (var i = 0; i < this.length; i++)
        {
            ctx.fillRect(grid[this.body[i].y][this.body[i].x][0], grid[this.body[i].y][this.body[i].x][1], this.width, this.height);
        }
    }

    /*
     * Set the direction as up, right, down, or left.
     */
    setDirection(code)
    {
        switch (code)
        { // Can't go in the opposite direction if the snake's length > 1.
            case 87: // w
                if (!(this.direction == 'd'))
                    this.direction = 'u';
                break;
            case 68: // d
                if (!(this.direction == 'l'))
                    this.direction = 'r';
                break;
            case 83: // s
                if (!(this.direction == 'u'))
                    this.direction = 'd';
                break;
            case 65: // a
                if (!(this.direction == 'r'))
                    this.direction = 'l';
                break;
        }
    }

    /* 
     * Change the x or y grid coordinate based on direction.
     */
    move(code)
    {
        if (code != '0')
        {
            for (var i = this.length - 1; i >= 1; i--)
            {
                // Set each block's position to the position
                // of the block closer to the head.
                this.body[i].setPos(this.body[i - 1].x, this.body[i - 1].y);
            }
        }
        switch (code)
        {
            case 'u': // w
                this.head.y--;
                break;
            case 'r': // d
                this.head.x++;
                break;
            case 'd': // s
                this.head.y++;
                break;
            case 'l': // a
                this.head.x--;
                break;
            default:
                break;
        }
    }

    /*
     * This function will check if there is a collision between the
     * head of the snake and a body block.
     */
    checkForCollision()
    {
        for (var i = 1; i < this.length; i++)
        {
            if (this.body[i].isEqual(this.head))
            {
                console.log("hit");
                return true;
            }
        }
        return false;
    }

    /*
     * This gets called when the snake died. Place a length 1 snake
     * the origin. 
     */
    reset() 
    {
        this.length = 1;
        this.head.setPos(2, 2);
        this.direction = '0';
    }
}

