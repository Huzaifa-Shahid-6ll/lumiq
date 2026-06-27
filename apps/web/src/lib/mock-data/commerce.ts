/**
 * Seeded products, allowed claims, campaigns, and catalog snapshots.
 *
 * UI-only mock data for Catalog, Campaigns, Templates, Setup, and product-grounding UI.
 * Claims rendered in generated/publish copy must trace to these allowed claims. B2 object
 * keys begin with `tenants/{organization_id}/`. See data-model.md.
 */

import type {
  AllowedClaim,
  CatalogSnapshot,
  MockCampaign,
  MockProduct,
} from "@/lib/screen-types";
import { DEMO_ORGANIZATION_ID } from "@/lib/mock-data/organization";

/* ------------------------------------------------------------------ *
 * Allowed claims
 * ------------------------------------------------------------------ */

export const ASTER_CROSSBODY_CLAIMS: AllowedClaim[] = [
  {
    claimId: "claim_aster_leather",
    claimText: "Full-grain Italian leather",
    source: "catalog",
    risk: "low",
    supportingField: "product.materials",
    status: "active",
  },
  {
    claimId: "claim_aster_strap",
    claimText: "Adjustable, removable crossbody strap",
    source: "catalog",
    risk: "low",
    supportingField: "product.features",
    status: "active",
  },
  {
    claimId: "claim_aster_handmade",
    claimText: "Hand-finished in small batches",
    source: "catalog",
    risk: "medium",
    supportingField: "product.description",
    status: "active",
  },
  {
    claimId: "claim_aster_spring_offer",
    claimText: "15% off during the Spring Drop",
    source: "campaign",
    risk: "restricted",
    supportingField: "campaign.offerTerms",
    status: "active",
  },
  {
    claimId: "claim_aster_free_ship",
    claimText: "Free shipping over $150",
    source: "campaign",
    risk: "restricted",
    supportingField: "campaign.offerTerms",
    status: "active",
  },
  {
    claimId: "claim_aster_waterproof",
    claimText: "Fully waterproof",
    source: "manual",
    risk: "restricted",
    supportingField: "unsupported",
    status: "blocked",
  },
];

/* ------------------------------------------------------------------ *
 * Products
 * ------------------------------------------------------------------ */

export const DEMO_PRODUCT_ID = "prod_aster_crossbody";

export const mockProducts: MockProduct[] = [
  {
    productId: DEMO_PRODUCT_ID,
    organizationId: DEMO_ORGANIZATION_ID,
    sku: "ASTER-CB-001",
    name: "Aster Crossbody Bag",
    productUrl: "https://shop.aster-atelier.example/products/aster-crossbody",
    priceLabel: "$168.00",
    inventoryLabel: "In stock · 42 units",
    mediaRefs: ["asset_prod_aster_front", "asset_prod_aster_detail"],
    allowedClaims: ASTER_CROSSBODY_CLAIMS,
    completeness: "complete",
    snapshotIncluded: true,
  },
  {
    productId: "prod_aster_wallet",
    organizationId: DEMO_ORGANIZATION_ID,
    sku: "ASTER-WL-004",
    name: "Aster Bifold Wallet",
    productUrl: "https://shop.aster-atelier.example/products/aster-bifold",
    priceLabel: "$72.00",
    inventoryLabel: "In stock · 120 units",
    mediaRefs: ["asset_prod_wallet_front"],
    allowedClaims: [
      {
        claimId: "claim_wallet_leather",
        claimText: "Full-grain leather",
        source: "catalog",
        risk: "low",
        supportingField: "product.materials",
        status: "active",
      },
      {
        claimId: "claim_wallet_rfid",
        claimText: "RFID-blocking lining",
        source: "catalog",
        risk: "medium",
        supportingField: "product.features",
        status: "active",
      },
    ],
    completeness: "complete",
    snapshotIncluded: true,
  },
  {
    productId: "prod_aster_tote",
    organizationId: DEMO_ORGANIZATION_ID,
    sku: "ASTER-TT-007",
    name: "Aster Market Tote",
    productUrl: "https://shop.aster-atelier.example/products/aster-tote",
    priceLabel: "$140.00",
    inventoryLabel: "Low stock · 6 units",
    mediaRefs: [],
    allowedClaims: [],
    completeness: "missing-media",
    snapshotIncluded: false,
  },
  {
    productId: "prod_aster_belt",
    organizationId: DEMO_ORGANIZATION_ID,
    sku: "ASTER-BL-002",
    name: "Aster Woven Belt",
    productUrl: "",
    priceLabel: "$58.00",
    inventoryLabel: "In stock · 88 units",
    mediaRefs: ["asset_prod_belt_front"],
    allowedClaims: [],
    completeness: "missing-url",
    snapshotIncluded: false,
  },
  {
    productId: "prod_aster_scarf",
    organizationId: DEMO_ORGANIZATION_ID,
    sku: "ASTER-SC-011",
    name: "Aster Silk Scarf",
    productUrl: "https://shop.aster-atelier.example/products/aster-scarf",
    priceLabel: "$48.00",
    inventoryLabel: "In stock · 64 units",
    mediaRefs: ["asset_prod_scarf_front"],
    allowedClaims: [
      {
        claimId: "claim_scarf_silk",
        claimText: "100% mulberry silk",
        source: "catalog",
        risk: "low",
        supportingField: "product.materials",
        status: "active",
      },
    ],
    completeness: "missing-claims",
    snapshotIncluded: true,
  },
  {
    productId: "prod_aster_card",
    organizationId: DEMO_ORGANIZATION_ID,
    sku: "ASTER-CC-009",
    name: "Aster Card Holder",
    productUrl: "https://shop.aster-atelier.example/products/aster-card",
    priceLabel: "$36.00",
    inventoryLabel: "Draft",
    mediaRefs: [],
    allowedClaims: [],
    completeness: "draft",
    snapshotIncluded: false,
  },
];

/* ------------------------------------------------------------------ *
 * Campaigns
 * ------------------------------------------------------------------ */

export const DEMO_CAMPAIGN_ID = "camp_spring_drop";

export const mockCampaigns: MockCampaign[] = [
  {
    campaignId: DEMO_CAMPAIGN_ID,
    organizationId: DEMO_ORGANIZATION_ID,
    name: "Spring Drop 2026",
    status: "active",
    activeProductIds: [DEMO_PRODUCT_ID, "prod_aster_wallet", "prod_aster_scarf"],
    offerTerms: "15% off sitewide, free shipping over $150.",
    startsAt: "2026-06-01T00:00:00.000Z",
    endsAt: "2026-07-15T23:59:59.000Z",
    allowedClaimIds: ["claim_aster_spring_offer", "claim_aster_free_ship"],
    publishDestinations: ["TikTok", "Instagram Reels", "YouTube Shorts"],
  },
  {
    campaignId: "camp_winter_clearance",
    organizationId: DEMO_ORGANIZATION_ID,
    name: "Winter Clearance 2025",
    status: "expired",
    activeProductIds: ["prod_aster_wallet", "prod_aster_belt"],
    offerTerms: "Up to 30% off select items.",
    startsAt: "2025-12-01T00:00:00.000Z",
    endsAt: "2026-01-15T23:59:59.000Z",
    allowedClaimIds: [],
    publishDestinations: ["Instagram Reels"],
  },
];

/* ------------------------------------------------------------------ *
 * Catalog snapshots (frozen commerce facts for a session)
 * ------------------------------------------------------------------ */

export const DEMO_CATALOG_SNAPSHOT_ID = "snap_01aster_spring";

export const mockCatalogSnapshots: CatalogSnapshot[] = [
  {
    catalogSnapshotId: DEMO_CATALOG_SNAPSHOT_ID,
    organizationId: DEMO_ORGANIZATION_ID,
    createdAt: "2026-06-26T14:02:11.000Z",
    productCount: 6,
    offerCount: 2,
    claimCount: 14,
    manifestAssetId: "asset_snap_aster_manifest",
    manifestB2Key: `tenants/${DEMO_ORGANIZATION_ID}/catalog-snapshots/snap_01aster_spring/manifest.json`,
    sha256: "9f2c8b7a4e1d5c0f6b3a2e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b",
    status: "ready",
  },
  {
    catalogSnapshotId: "snap_01aster_winter",
    organizationId: DEMO_ORGANIZATION_ID,
    createdAt: "2025-12-02T09:14:00.000Z",
    productCount: 4,
    offerCount: 1,
    claimCount: 6,
    manifestAssetId: "asset_snap_winter_manifest",
    manifestB2Key: `tenants/${DEMO_ORGANIZATION_ID}/catalog-snapshots/snap_01aster_winter/manifest.json`,
    sha256: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
    status: "stale",
  },
];

/* ------------------------------------------------------------------ *
 * Lookups
 * ------------------------------------------------------------------ */

export function getProduct(productId: string): MockProduct | undefined {
  return mockProducts.find((p) => p.productId === productId);
}

export function getCampaign(campaignId: string): MockCampaign | undefined {
  return mockCampaigns.find((c) => c.campaignId === campaignId);
}

export function getCatalogSnapshot(snapshotId: string): CatalogSnapshot | undefined {
  return mockCatalogSnapshots.find((s) => s.catalogSnapshotId === snapshotId);
}

export function getAllowedClaim(claimId: string): AllowedClaim | undefined {
  for (const product of mockProducts) {
    const found = product.allowedClaims.find((claim) => claim.claimId === claimId);
    if (found) return found;
  }
  return ASTER_CROSSBODY_CLAIMS.find((claim) => claim.claimId === claimId);
}
