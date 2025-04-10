# import turtle

from turtle import Turtle, done
from random import random


def main():
    octagon()


def octagon():
    t = Turtle()
    t.shape("classic")
    for _ in range(0, 10):
        t.right(36)
        for _ in range(0, 5):
            t.forward(100)
            t.right(72)
    done()


def random_walk():
    t = Turtle()
    t.speed(1)
    for _ in range(100):
        steps = int(random() * 100)
        angle = int(random() * 360)
        t.right(angle)
        t.fd(steps)
    t.screen.mainloop()


if __name__ == "__main__":
    main()
