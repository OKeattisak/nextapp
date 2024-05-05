"use client";

import { useState } from 'react';
import { Box, TextInput, Title } from "@mantine/core";
import { Input, InputBase, Combobox, useCombobox, Text } from '@mantine/core';

const groceries = [
    '🍎 Apples',
    '🍌 Bananas',
    '🥦 Broccoli',
    '🥕 Carrots',
    '🍫 Chocolate',
    '🍇 Grapes',
    '🍋 Lemon',
    '🥬 Lettuce',
    '🍄 Mushrooms',
    '🍊 Oranges',
    '🥔 Potatoes',
    '🍅 Tomatoes',
    '🥚 Eggs',
    '🥛 Milk',
    '🍞 Bread',
    '🍗 Chicken',
    '🍔 Hamburger',
    '🧀 Cheese',
    '🥩 Steak',
    '🍟 French Fries',
    '🍕 Pizza',
    '🥦 Cauliflower',
    '🥜 Peanuts',
    '🍦 Ice Cream',
    '🍯 Honey',
    '🥖 Baguette',
    '🍣 Sushi',
    '🥝 Kiwi',
    '🍓 Strawberries',
];

export default function Dashboard() {

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [value, setValue] = useState('');
    const shouldFilterOptions = !groceries.some((item) => item === value);
    const filteredOptions = shouldFilterOptions
        ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
        : groceries;

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <>
            <Title order={1}>Combobox</Title>
            <Combobox
                store={combobox}
                onOptionSubmit={(val) => {
                    setValue(val);
                    combobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <TextInput
                        label="Pick value or type anything"
                        placeholder="Pick value or type anything"
                        value={value}
                        onChange={(event) => {
                            setValue(event.currentTarget.value);
                            combobox.openDropdown();
                            combobox.updateSelectedOptionIndex();
                        }}
                        onClick={() => combobox.openDropdown()}
                        onFocus={() => combobox.openDropdown()}
                        onBlur={() => combobox.closeDropdown()}
                    />
                </Combobox.Target>
                <Combobox.Dropdown>
                    <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
                        {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>

            <Box mb="xs">
                <Text span size="sm" c="dimmed">
                    Selected item:{' '}
                </Text>

                <Text>
                    {value || 'Nothing selected'}
                </Text>
            </Box>
        </>
    )
}