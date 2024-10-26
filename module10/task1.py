from elevator import Elevator

elevator1 = Elevator(1, 10)

print(f"""
Bottom floor: {elevator1.bottom_floor}
Top floor: {elevator1.top_floor}
Current floor: {elevator1.current_floor}
""")
# Elevator move to fifth floor
elevator1.go_to_floor(5)

print("")

# Elevator back to the bottom floor
elevator1.go_to_floor(elevator1.bottom_floor)