from elevator import Elevator

class Building:
    def __init__(self, bottom, top, num):
        self.bottom_floor = bottom
        self.top_floor = top
        self.num_of_elevators = num
        self.elevators = []
        for i in range(self.num_of_elevators):
            self.elevators.append(Elevator(self.bottom_floor, self.top_floor))

    def run_elevator(self, index, floor):
        print(f"The Elevator {index} is going to floor {floor}.")
        self.elevators[index-1].go_to_floor(floor)

    def fire_alarm(self):
        print(f"""Fire alarm!!!!!""")
        for i in range(self.num_of_elevators):
            print(f"The Elevator {i + 1} is going back to {self.bottom_floor}.")
            self.elevators[i].go_to_floor(self.bottom_floor)
