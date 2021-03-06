# Module: MMM-IndoorTempSimulator

This is an extension for the [MagicMirror](https://github.com/sdetweil/MagicMirror_scripts) . It allows you to simulate a house temperature sensor.

The simulation allows the specified temperature to be randomly varied by ± 1° from the reference temperature.

It then sends this temperature as an `INDOOR_TEMPERATURE` notification every 30 seconds to other modules, allowing it to be displayed in modules that take this notification into account, such as weather modules (e.g. `WEATHER`).

## Installation
Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/DavidFSPro/MMM-IndoorTempSimulator.git`. A new folder will appear navigate into it.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: 
[
	{
		module: "MMM-IndoorTempSimulator",
		config:
		{
			temp: 19
		}
	},
]
````

## Configuration options
### Basic

The following properties can be configured:

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>temp</code></td>
			<td>Reference temperature: set the temperature you want as a reference.<br>
				<br><b>default value : </b>20
			</td>
		</tr>
	</tbody>
</table>

## Dependencies
- None

The MIT License (MIT)
=====================

Copyright © 2021 **David** / **FabLab LabHidouille by Familles Solidaires**

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
