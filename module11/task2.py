from module9.car import Car

class ElectricCar(Car):
    def __init__(self, reg_num, max_speed, battery_capacity):
        super().__init__(reg_num, max_speed)
        self.battery_capacity = battery_capacity

    def print_travelled_distance(self):
        print(f"The traveled distance of the electronic car {self.registration_number} is: {self.travelled_distance} km")

class GasCar(Car):
    def __init__(self, reg_num, max_speed, tank_capacity):
        super().__init__(reg_num, max_speed)
        self.tank_capacity = tank_capacity

    def print_travelled_distance(self):
        print(f"The traveled distance of the gas car {self.registration_number} is: {self.travelled_distance} km")

el_car1 = ElectricCar('ABC-15',180,52.5)
gas_car1= GasCar('ACD-123',165,32.3)
el_car1.accelerate(30.)
gas_car1.accelerate(100.)
el_car1.drive(3.)
gas_car1.drive(3.)
el_car1.print_travelled_distance()
gas_car1.print_travelled_distance()