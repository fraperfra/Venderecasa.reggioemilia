"use client";

import React, { useState, useEffect, useRef } from 'react';

interface Suggestion {
    display_name: string;
    lat: string;
    lon: string;
    address: {
        road?: string;
        house_number?: string;
        city?: string;
        town?: string;
        village?: string;
        county?: string;
    };
}

interface AddressAutocompleteProps {
    idPrefix: string;
    defaultValue?: string;
    placeholder?: string;
    required?: boolean;
}

export default function AddressAutocomplete({ idPrefix, defaultValue = '', placeholder = 'Via Emilia...', required = false }: AddressAutocompleteProps) {
    const [query, setQuery] = useState(defaultValue);
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const fetchSuggestions = async (val: string) => {
        if (val.length < 3) {
            setSuggestions([]);
            setShowDropdown(false);
            return;
        }

        setIsLoading(true);
        try {
            // Search restricted to Italy, and province of Reggio Emilia
            // viewbox for Reggio Emilia approx: 10.40, 44.30, 10.90, 44.90
            const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(val + ', Reggio Emilia')}&format=json&addressdetails=1&limit=5&countrycodes=it&viewbox=10.40,44.90,10.90,44.30&bounded=1`;

            const res = await fetch(url, {
                headers: {
                    'Accept-Language': 'it'
                }
            });
            const data = await res.json();
            setSuggestions(data);
            setShowDropdown(data.length > 0);
        } catch (error) {
            console.error('Error fetching address suggestions:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setQuery(val);

        // Simple debounce
        const timeoutId = setTimeout(() => {
            fetchSuggestions(val);
        }, 400);

        return () => clearTimeout(timeoutId);
    };

    const handleSelect = (suggestion: Suggestion) => {
        setQuery(suggestion.display_name);
        setShowDropdown(false);
    };

    return (
        <div className="address-autocomplete-container" ref={dropdownRef}>
            <input
                type="text"
                id={`${idPrefix}-address`}
                name="address"
                className="form-control"
                placeholder={placeholder}
                value={query}
                onChange={handleInputChange}
                autoComplete="off"
                required={required}
            />

            {showDropdown && (
                <div className="suggestions-dropdown">
                    {suggestions.map((s, i) => (
                        <div
                            key={i}
                            className="suggestion-item"
                            onClick={() => handleSelect(s)}
                        >
                            {s.display_name}
                        </div>
                    ))}
                </div>
            )}

            {isLoading && <div className="autocomplete-loader">Cercando...</div>}
        </div>
    );
}
