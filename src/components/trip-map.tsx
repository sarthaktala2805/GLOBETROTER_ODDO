"use client";

import { useEffect, useState } from "react";
import { CircleMarker, MapContainer, Polyline, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { cities, sampleTrip } from "@/lib/data";
import { Trip } from "@/lib/models";

export default function TripMap({ trip = sampleTrip }: { trip?: Trip }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{
        height: "440px",
        display: "grid",
        placeItems: "center",
        background: "var(--surface-alt)",
        color: "var(--ink-500)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)"
      }}>
        Loading interactive map...
      </div>
    );
  }

  const stops = trip.stops
    .map((stop) => cities.find((city) => city.id === stop.cityId)!)
    .filter(Boolean);

  const route = stops.map((city) => [city.latitude, city.longitude] as LatLngExpression);
  const center: LatLngExpression = stops.length
    ? [stops[0].latitude, stops[0].longitude]
    : [22.5, 78.9];

  return (
    <div className="map-container-wrap">
      <MapContainer
        center={center}
        zoom={stops.length > 1 ? 5 : 6}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", borderRadius: "var(--radius-lg)" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {route.length > 1 && (
          <Polyline
            positions={route}
            pathOptions={{ color: "#ff6b35", weight: 4, dashArray: "8 8", opacity: 0.85 }}
          />
        )}
        {stops.map((city, index) => (
          <CircleMarker
            key={`${city.id}-${index}`}
            center={[city.latitude, city.longitude]}
            radius={14}
            pathOptions={{
              color: "#ffffff",
              weight: 3,
              fillColor: index === 0 ? "#10b981" : "#ff6b35",
              fillOpacity: 1,
            }}
          >
            <Popup>
              <div style={{ padding: "4px" }}>
                <strong style={{ fontSize: "14px", display: "block", color: "#0f172a" }}>
                  Stop 0{index + 1}: {city.name}
                </strong>
                <span style={{ fontSize: "12px", color: "#64748b" }}>
                  {city.state} · {city.bestTimeToVisit}
                </span>
                <p style={{ fontSize: "11px", color: "#475569", marginTop: "4px" }}>
                  {city.shortDescription}
                </p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
