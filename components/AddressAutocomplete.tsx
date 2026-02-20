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
        postcode?: string;
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
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, []);

    const fetchSuggestions = async (val: string) => {
        if (val.length < 3) {
            setSuggestions([]);
            setShowDropdown(false);
            return;
        }

        setIsLoading(true);
        try {
            // Refined Bounding Box for Reggio Emilia Province (lon_min, lat_max, lon_max, lat_min)
            // Coordinates cover the whole RE province from Po to Apennines
            const viewbox = "10.18,44.97,10.85,44.27";
            const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(val + ', Reggio Emilia, Italia')}&format=json&addressdetails=1&limit=8&countrycodes=it&viewbox=${viewbox}&bounded=1&featuretype=settlement,street`;

            const res = await fetch(url, {
                headers: {
                    'Accept-Language': 'it',
                    'User-Agent': 'DibaLandingPage/1.0' // Best practice for Nominatim
                }
            });

            if (!res.ok) throw new Error('Network response was not ok');

            const data: Suggestion[] = await res.json();

            // Post-filtering to ensure we stay in the province of Reggio Emilia
            // and formatting the display name for clarity
            const filtered = data
                .filter(item => {
                    const addr = item.address;
                    const isRE =
                        (addr.county && addr.county.toLowerCase().includes('reggio')) ||
                        (addr.city && addr.city.toLowerCase().includes('reggio')) ||
                        (addr.town && addr.town.toLowerCase().includes('reggio')) ||
                        (addr.village && addr.village.toLowerCase().includes('reggio'));

                    // Prioritize results that actually have a road
                    return isRE && addr.road;
                })
                .map(item => {
                    // Clean up display name: Road, Number (if any) - CAP City/Town
                    const road = item.address.road;
                    const num = item.address.house_number ? `, ${item.address.house_number}` : '';
                    const cap = item.address.postcode ? `${item.address.postcode} ` : '';
                    const city = item.address.city || item.address.town || item.address.village || 'RE';

                    return {
                        ...item,
                        display_name: `${road}${num} - ${cap}${city}`
                    };
                });

            setSuggestions(filtered);
            setShowDropdown(filtered.length > 0);
        } catch (error) {
            console.error('Error fetching address suggestions:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setQuery(val);

        if (debounceRef.current) clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(() => {
            fetchSuggestions(val);
        }, 350);
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

            {isLoading && <div className="autocomplete-loader">Cercando in RE...</div>}
        </div>
    );
}
