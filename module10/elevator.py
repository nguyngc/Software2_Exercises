class Elevator:
    def __init__(self, bottom, top):
        self.bottom_floor = bottom
        self.top_floor = top
        self.current_floor = bottom

    def go_to_floor(self, floor_number):
        if floor_number > self.top_floor or floor_number < self.bottom_floor:
            print('Not a valid floor number')
            return

        # loop until you are in the correct floor
        while self.current_floor != floor_number:
            if self.current_floor > floor_number:
                self.floor_down()
            else:
                self.floor_up()

    def floor_up(self):
        # go up one floor
        # print the current floor
        self.current_floor += 1
        print(f"Current floor is {self.current_floor}.")

    def floor_down(self):
        # go down one floor
        # print the current floor
        self.current_floor -= 1
        print(f"Current floor is {self.current_floor}.")
